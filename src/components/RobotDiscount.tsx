import React, { useContext } from "react";
import styles from "./Robot.modules.css";
import { AppContext } from "../AppState";
import { useAddToCart } from "./AddToCart";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const contextValue = useContext(AppContext);
  const addToCart = useAddToCart();
  return (
    <div className={styles.cardContainer} key={id}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contextValue.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  );
};

export default RobotDiscount;

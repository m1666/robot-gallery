import React, { useContext } from "react";
import styles from "./Robot.modules.css";
import { AppContext } from "../AppState";
import { withAddToCart } from "./AddToCart";

export interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id: any, name: any) => void;
}

const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const contextValue = useContext(AppContext);

  return (
    <div className={styles.cardContainer} key={id}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contextValue.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  );
};

export default withAddToCart(Robot);

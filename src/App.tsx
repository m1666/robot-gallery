import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";

import Robot from "./components/Robot";
import RobotDiscount from "./components/RobotDiscount";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
}

const App: React.FC = () => {
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .catch((e) => {
        console.log("error: ", e.message);
      })
      .then((data) => {
        setLoading(false);
        setRobotGallery(data);
      });
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt={""} />
        <h1> 机器人online购物平台 </h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((robot: any, index: number) =>
            index % 2 === 0 ? (
              <RobotDiscount
                id={robot.id}
                name={robot.name}
                email={robot.email}
              />
            ) : (
              <Robot id={robot.id} name={robot.name} email={robot.email} />
            )
          )}
        </div>
      ) : (
        <div>
          <h2>Loading 加载中。。。</h2>
        </div>
      )}
    </div>
  );
};

export default App;

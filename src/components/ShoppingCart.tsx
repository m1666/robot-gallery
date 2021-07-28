import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  // 配置构建函数
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // 此处 this 指向问题，建议使用箭头函数
  // handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // };
  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // 描述事件发生的元素
    console.log("[e.target]: ", e.target);
    // 描述事件处理绑定的元素
    console.log("[e.currentTarget]: e.currentTarget", e.currentTarget);
    // 只处理点击 span 标签页的点击事件
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <FiShoppingCart />
          <span>购物车 2 (件)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;

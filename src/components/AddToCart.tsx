import React, { useContext } from "react";
import { AppSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  // return class extends React.Component {};
  return (props: any) => {
    const setState = useContext(AppSetStateContext);

    const addToCart = (id: any, name: any) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };
    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};

export const useAddToCart = () => {
  const setState = useContext(AppSetStateContext);

  const addToCart = (id: any, name: any) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return addToCart;
};

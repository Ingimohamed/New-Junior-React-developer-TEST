import { ActionsType } from "../../redux/type/Type";
export const Selected_Product = (Selected_Product) => {
  return {
    type: ActionsType.Selecte_Product,
    payload: Selected_Product,
  };
};

export const ShoppingCart_Add = (ShoppingCart) => {
  return {
    type: ActionsType.AddToShoppingCart,
    payload: ShoppingCart,
  };
};

export const ShoppingCart_Remove = (ShoppingCart) => {
  return {
    type: ActionsType.RemoveFromShoppingCart,
    payload: ShoppingCart,
  };
};

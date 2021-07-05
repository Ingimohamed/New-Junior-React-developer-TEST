import { ActionsType } from "../type/Type";
const InitialState = {
  products: [],
  Category: "",
  Select_product: [],
  ShoppingCart: [],
  currency: 0,
};

export const Reducer_Selected_Product = (state = InitialState, action) => {
  switch (action.type) {
    case ActionsType.Selecte_Product:
      return {
        ...state,
        Select_product: [action.payload],
      };

    default:
      return state;
  }
};

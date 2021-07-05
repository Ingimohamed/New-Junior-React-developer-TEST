import { ActionsType } from "../../redux/type/Type";
export const Selected_Product = (Selected_Product) => {
  return {
    type: ActionsType.Selecte_Product,
    payload: Selected_Product,
  };
};

import { useContext } from "react";
import productsContext, {
  UseProductContextType,
} from "../context/ProductsProvider";

const useProducts = (): UseProductContextType => {
  return useContext(productsContext);
};

export default useProducts;

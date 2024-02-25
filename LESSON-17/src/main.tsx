import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./context/CartProvider.tsx";
import { ProductsProvider } from "./context/ProductsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </CartProvider>
);

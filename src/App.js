import ProductForm from "./components/prodductForm";
import ProductData from "./components/productData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Products App</h1>
      <ProductData />
      <ProductForm />
    </div>
  );
}

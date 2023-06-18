import { useState } from "react";
import ProductForm from "./components/prodductForm";
import ProductData from "./components/productData";
import "./styles.css";

export default function App() {
  const [showData,setShowData]=useState(false)
  return (
    <div className="App">
      <h1>Products App</h1>
      <button onClick={()=>{setShowData(!showData)}}>{showData?'Hide Data':'Display Data'}</button>
      {showData && <ProductData />}
      <ProductForm />
    </div>
  );
}

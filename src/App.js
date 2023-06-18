import { useEffect, useState } from "react";
import ProductForm from "./components/prodductForm";
import ProductData from "./components/productData";
import "./styles.css";
import DisplayData from "./components/displayData";
import { useDispatch } from "react-redux";

export default function App() {
  const [showData,setShowData]=useState(false)
  const dispatch=useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log("-----",res);
        dispatch({type:'setData',data:res.products})
      });
  }, []);
  return (
    <div className="App">
      <h1>Products App</h1>
      
      <button onClick={()=>{setShowData(!showData)}}>{showData?'Hide Data':'Display Data'}</button>
      {showData &&
       <DisplayData/>
       }
      <ProductForm />
    </div>
  );
}

import { useEffect, useState } from "react";
import DisplayData from "./displayData";
import { useDispatch } from "react-redux";

const ProductData = () => {
  const [data, setData] = useState({});
  const dispatch=useDispatch();
  console.log("inside roductdata")
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log("-----",res);
        setData(res);
        dispatch({type:'setData',data:res.products})
      });
  }, []);

};
export default ProductData;

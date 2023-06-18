import { useEffect, useState } from "react";
import DisplayData from "./displayData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductData = () => {
  const [data, setData] = useState({});
  const dispatch=useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log("-----",res);
        setData(res);
        dispatch({type:'setData',data:res})
      });
  }, []);

  return (
    <div>
      <DisplayData productDetails={data} />
    </div>
  );
};
export default ProductData;

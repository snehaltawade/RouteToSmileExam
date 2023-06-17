import { useEffect, useState } from "react";
import DisplayData from "./displayData";

const ProductData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  return (
    <div>
      <DisplayData productDetails={data} />
    </div>
  );
};
export default ProductData;

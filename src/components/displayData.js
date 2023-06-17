import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const DisplayData = () => {
  const productsDetails = useSelector((state) => state.productsDetails);
  const onDeleteHandler = (id) => {
    axios
      .delete("https://dummyjson.com/products", { data: { id: id } })
      .then((res) => {
        console.log(res);
      });
    console.log(id, "data deleted");
  };
  return (
    <>
      {productsDetails.productsDetails.map((product) => (
        <div style={{ display: "flex" }}>
          <h4>Data</h4>
          <h3>{product.id}</h3>
          <h3>{product.title}</h3>
          <h3>{product.description}</h3>
          <h3>{product.price}</h3>
          <h3>{product.discountPercentage}</h3>
          <h3>{product.rating}</h3>
          <h3>{product.stock}</h3>
          <h3>{product.Category}</h3>
          <button
            onClick={() => {
              onDeleteHandler(product.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayData;

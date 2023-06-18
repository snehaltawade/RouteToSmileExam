import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const DisplayData = () => {
  const productsDetails = useSelector((state) => state.products);
  console.log(productsDetails)
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
      <h4>Product Data</h4>
      {productsDetails.map((product) => (
        
        <table style={{border:'1px solid black',display:'grid'}} className="table">
          <tr> 
            <td><h3>Product Id: </h3></td>
            <td><h3>{product.id}</h3></td>
          </tr>
          <tr>
            <td><h3> Title: </h3></td>
            <td><h3>{product.title}</h3></td>
          </tr>
          <tr>
          <td><h3>Description: </h3></td>
          <td><h3>{product.description}</h3></td>
          </tr>
          <tr>
          <td><h3>Price: </h3></td>
          <td> <h3>{product.price}</h3></td>
          </tr>
          <tr>
          <td><h3>Discount Percentage: </h3></td>
          <td><h3>{product.discountPercentage}</h3></td>  
          </tr>
          <tr>
          <td>Rating: </td>
          <td> <h3>{product.rating}</h3></td>
          </tr>
          <tr>
          <td>Stock: </td>
          <td><h3>{product.stock}</h3></td>
          </tr>
          <tr>
          <button
            onClick={() => {
              onDeleteHandler(product.id);
            }}
          >
            Delete
          </button>
          </tr>

        </table>
      ))}
    </>
  );
};

export default DisplayData;

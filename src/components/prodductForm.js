import { useState } from "react";

const ProductForm = () => {
  const [data, setData] = useState({});
  const onChangeHandler = (e) => {
    console.log(e);
    let key = e.target.name;
    let value = e.target.value;
    setData((prevData) => ({ ...prevData, [key]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await fetch("https://dummyjson.com/products", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h2>Product Form</h2>
        <div>
          <label>Id</label>
          <input
            type="text"
            name="title"
            value={data.Id}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="desc"
            value={data.desc}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>price</label>
          <input
            type="text"
            name="price"
            value={data.price}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>discountPercentage</label>
          <input
            type="text"
            name="discount"
            value={data.discount}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>rating</label>
          <input
            type="text"
            name="rating"
            value={data.rating}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>stock</label>
          <input
            type="text"
            name="stock"
            value={data.stock}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={data.category}
            onChange={onChangeHandler}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default ProductForm;

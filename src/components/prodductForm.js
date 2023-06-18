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

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default ProductForm;

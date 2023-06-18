import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductForm = () => {
  const [data, setData] = useState({});
  const dispatch= useDispatch();
  const onChangeHandler = (e) => {
    console.log(e);
    let key = e.target.name;
    let value = e.target.value;
    setData((prevData) => ({ ...prevData, [key]: value }));
  };
  const onSubmitHandler =  (e) => {
    e.preventDefault();
    console.log(data);
    dispatch({type:'addData',data:data})
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
            name="description"
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

import { createStore } from "redux";

const initialState = {
  productsDetails: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple"
    },
    {
      id: 2,
      title: "iPhone 11",
      description: "An apple mobile which is nothing like apple"
    }
  ]
};
const dataReducer = (state = { productsDetails: initialState }, action) => {
  console.log(state.productsDetails);
  return state;
};

const store = createStore(dataReducer);

export default store;
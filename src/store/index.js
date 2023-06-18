import { createStore } from "redux";

const initialState = {
  products: [
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
  ],
  length:0,
};
const dataReducer = (state =  initialState , action) => {
  console.log(state);
  if(action.type=='setData'){
    return {
      products: action.data,
      length:action.data.length,};
  }
  if(action.type=='addData'){
    console.log(action.data);
    return {products: [...state.products,{...action.data,id:'91'}],length:state.length+1};
  }
  return state;
  }
  

const store = createStore(dataReducer);

export default store;

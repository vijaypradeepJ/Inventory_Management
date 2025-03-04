
import {create} from "zustand";

const useStore=create((set)=>({
    data:[
        {
            id:1,
            Name:"apple",
            category:"fruits",
            pur_price:20,
            sales_price:40
          },
          {
            id:2,
            Name:"Mango",
            category:"fruits",
            pur_price:20,
            sales_price:40
          },
          {
            id:3,
            Name:"papaya",
            category:"fruits",
            pur_price:20,
            sales_price:40
          },
          {
            id:4,
            Name:"potato",
            category:"fruits",
            pur_price:20,
            sales_price:40
          }
    ],
    adddata:(newData)=>set((state)=>({data:[...state.data,newData]}))
}))
export default useStore;
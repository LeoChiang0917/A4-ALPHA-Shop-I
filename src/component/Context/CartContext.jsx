import { createContext, useState } from "react"
import { product } from "component/Cart/Data"

const CartContext = createContext()

function CartContextProvider({children}) {
    const [currentProduct, setCurrentProduct] = useState(product)
    const [shippingPrice, setShippingPrice] = useState(0)
    const [lastSelectedShipping, setLastSelectedShipping] = useState("standard")


    function plusHandleClick(dataId){
        const plusItem = currentProduct.map((plus) =>{
          if(plus.id===dataId){
            return {
             ...plus,
             quantity: plus.quantity+1
           } 
          }else{
           return plus
          }
        })
        setCurrentProduct(plusItem);
       }
    
       function minusHandleClick(dataId){
        const minusItem = currentProduct.map((minus) =>{
          if(minus.id===dataId){
            return {
             ...minus,
             quantity: minus.quantity-1
           } 
          }else{
           return minus
          }
        })  
        setCurrentProduct(minusItem.filter(p => p.quantity > 0));
      }

      

      function addShippingPrice(price) {
        setShippingPrice(price)
      }
    
      function updateShippingPrice(selectedShipping) {
        setLastSelectedShipping(selectedShipping)
      }
   
    return(
    <CartContext.Provider value={{shippingPrice,currentProduct,plusHandleClick,minusHandleClick,addShippingPrice,updateShippingPrice,lastSelectedShipping}}>
       {children} 
    </CartContext.Provider>
    )
    }
    export {CartContext, CartContextProvider}
import { useContext } from 'react'
import './Cart.css'
import {product} from './Data'
import minusIcon from '../../../asset/minus.svg'
import plusIcon from '../../../asset/plus.svg'
import { CartContext } from '../../CartContext'




function Productdetail({Item}){
const {PlushandleClick, MinushandleClick} = useContext(CartContext)
return(
<div className="productContainer" data-count="{Item.quantity}" data-price="{Item.price}">
        <img className="imgContainer"src={Item.image} />
        <div className="productInfo">
          <div className="productName">{Item.name}</div>
          <div className="productControlContainer">
            <div className="productControl">
            <img src={minusIcon} alt="minusIcon" onClick={()=>{MinushandleClick(Item.id)}}/>
              <span className="productCount">{Item.quantity}</span>
              <img src={plusIcon} alt="plusIcon" onClick={() =>{PlushandleClick(Item.id)}} />
            </div>
          </div>
          <div className="price">${Item.quantity*Item.price}</div>
        </div>
      </div>
)
}


export default function CartSheet(){
  const {currentProduct,shippingPrice,allPrice} = useContext(CartContext)

    return(
       <>
       <section className='cartContainer'>
       <h3 class="cartTitle">購物籃</h3>   
         <section className="productList" data-total-price="0">
           {currentProduct.map(item =><Productdetail
           Item = {item}
           key = {item.id}
           />)}
         </section>
       {/* 總結 */}
       <section class="cartInfo">
            <div class="text">運費</div>
            <div class="price">{shippingPrice === 0 ? "免運" : '$'+shippingPrice}</div>
          </section>
          <section class="cartInfoTotal">
            <div class="text">小計</div>
            <div class="price">{allPrice}</div>
          </section>
       </section>
       
       </>
    );
}
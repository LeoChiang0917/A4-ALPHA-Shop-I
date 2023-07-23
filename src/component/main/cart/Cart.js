import { useState } from 'react'
import './Cart.css'
import { product } from './Data.js';
import minusIcon from '../../../asset/minus.svg'
import plusIcon from '../../../asset/plus.svg'



export default function CartSheet(){
    const productdetail = product.map(p => 
        <div className="productContainer" data-count="{p.quantity}" data-price="{p.price}">
        <img className="imgContainer"src={p.img} />
        <div className="productInfo">
          <div className="productName">{p.name}</div>
          <div className="productControlContainer">
            <div className="productControl">
            <img src={minusIcon} alt="minusIcon" />
              <span className="productCount">{p.quantity}</span>
              <img src={plusIcon} alt="plusIcon" />
            </div>
          </div>
          <div className="price">{p.price}</div>
        </div>
      </div>
        );

    return(
       <>
       <section className='cartContainer'>
       <h3 class="cartTitle">購物籃</h3>   
         <section className="productList" data-total-price="0">
           {productdetail}
         </section>
       {/* 總結 */}
       <section class="cartInfo">
            <div class="text">運費</div>
            <div class="price">免費</div>
          </section>
          <section class="cartInfoTotal">
            <div class="text">小計</div>
            <div class="price">$0</div>
          </section>
       </section>
       
       </>
    );
}
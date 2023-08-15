import { useContext } from 'react'
import styles from './Cart.module.css'
import minusIcon from '../../../asset/minus.svg'
import plusIcon from '../../../asset/plus.svg'
import { CartContext } from 'component/Context/CartContext'


function Productdetail({Item}){
const {PlushandleClick, MinushandleClick} = useContext(CartContext)
return(
<div className={styles.productContainer} data-count="{Item.quantity}" data-price="{Item.price}">
        <img className={styles.imgContainer} src={Item.img} alt='imgContainer'/>
        <div className={styles.productInfo}>
          <div className={styles.productName}>{Item.name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
            <img src={minusIcon} alt="minusIcon" onClick={()=>{MinushandleClick(Item.id)}}/>
              <span className={styles.productCount}>{Item.quantity}</span>
              <img src={plusIcon} alt="plusIcon" onClick={() =>{PlushandleClick(Item.id)}} />
            </div>
          </div>
          <div className={styles.price}>${Item.quantity*Item.price}</div>
        </div>
      </div>
)
}


export default function CartSheet(){
  const {currentProduct,shippingPrice,addTotalPrice} = useContext(CartContext)

    return(
       <>
       <section className={styles.cartContainer}>
       <h3 className={styles.cartTitle}>購物籃</h3>   
         <section className={styles.productList} data-total-price="0">
           {currentProduct.map(item =><Productdetail
           Item = {item}
           key = {item.id}
           />)}
         </section>
       {/* 總結 */}
       <section className={styles.cartInfo}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>{shippingPrice === 0 ? "免運" : '$'+shippingPrice}</div>
          </section>
          <section className={styles.cartInfoTotal}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>{addTotalPrice()}</div>
          </section>
       </section>
       
       </>
    );
}
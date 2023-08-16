
import stylesTwo from './Step2.module.css'
import { useState, useContext, useEffect } from "react";
import { CartContext } from 'component/Context/CartContext';
export default function StepTwo() {
const {lastSelectedShipping,addShippingPrice,updateShippingPrice} = useContext(CartContext)


const [shipping,Setshipping] = useState(lastSelectedShipping)

useEffect(() => {
Setshipping(lastSelectedShipping);
}, [lastSelectedShipping]);

const handleSelectshipping = (e) =>{
  const selectShiping = e.target.id
  Setshipping(selectShiping)
  if(selectShiping ==='standard'){
    addShippingPrice(0)
  }else if(selectShiping==='DHL'){
    addShippingPrice(500)
  }
  updateShippingPrice(selectShiping)
}

  return (
    <>
    <div className={stylesTwo.container}>
      <form className={stylesTwo.form} data-phase="shipping">
        <h3>運送方式</h3>
        <section>
          <div className={stylesTwo.group}>
            <label className={stylesTwo.customRadio} onClick={() =>addShippingPrice(0)}>
              <div className={stylesTwo.groupFirst}>
                <div className={stylesTwo.groupOne}>
                  <input
                    id="standard"
                    type="radio"
                    name="shipping"
                    checked={shipping==='standard'}
                    onChange={handleSelectshipping}
                  />
                </div>
                <div className={stylesTwo.groupTwo}>
                  <div>
                    <div>標準運送</div>
                    <div className="price" />
                  </div>
                  <div>約 3~7 個工作天</div>
                </div>
                <div className={stylesTwo.groupThree}>
                  <div>免費</div>
                </div>
                <div />
              </div>
            </label>
          </div>
          <div className={stylesTwo.group}>
            <label className={stylesTwo.customRadio} onClick={() =>addShippingPrice(500)}>
              <div className={stylesTwo.groupFirst}>
                <div className={stylesTwo.groupOne}>
                  <input 
                  id="DHL" 
                  type="radio" 
                  name="shipping" 
                  checked={shipping==='DHL'} 
                  onChange={handleSelectshipping}/>
                </div>
                <div className={stylesTwo.groupTwo}>
                  <div>
                    <div>DHL 貨運</div>
                    <div className="price" />
                  </div>
                  <div>48 小時內送達</div>
                </div>
                <div className={stylesTwo.groupThree}>
                  <div>$500</div>
                </div>
                <div />
              </div>
            </label>
          </div>
        </section>
      </form>
      </div>
    </>
  );
}

import stylesTwo from './Step2.module.css'
import { useState, useContext, useEffect } from "react";
export default function StepTwo({setShippingFee}) {
  return (
    <>
    <div className={stylesTwo.container}>
      <form className={stylesTwo.form} data-phase="shipping">
        <h3>運送方式</h3>
        <section>
          <div className={stylesTwo.group}>
            <label className={stylesTwo.customRadio} data-price={0}>
              <div className={stylesTwo.groupFirst}>
                <div className={stylesTwo.groupOne}>
                  <input
                    id="shipping-standard"
                    type="radio"
                    name="shipping"
                    defaultChecked=""
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
            <label className={stylesTwo.customRadio} data-price={500}>
              <div className={stylesTwo.groupFirst}>
                <div className={stylesTwo.groupOne}>
                  <input id="shipping-dhl" type="radio" name="shipping"/>
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
import stylesThree from "./Step3.module.css"
import { FormContext } from "../../../FormContext"
import {useContext } from 'react'

function StepThree () {
const {SetformInfo, formInfo} = useContext(FormContext)

function handleCardinfo(e){
  SetformInfo({...formInfo, [e.target.name]:e.target.value })

}
  return (

    <form  data-phase="credit-card">
              <h3 className={stylesThree.formTitle}>付款資訊</h3>
              <section className={stylesThree.formBody}>

                <div className={stylesThree.inputLine1}>
                  <div className={stylesThree.inputGroup}>
                    <div className={stylesThree.inputLabel}>持卡人姓名</div>
                    <input className={stylesThree.inputStyle} 
                    type="text" 
                    placeholder="John Doe" 
                    onChange={e => handleCardinfo(e)}/>
                  </div>
                </div>

                <div className={stylesThree.inputLine2}>
                  <div className={stylesThree.inputGroup}>
                    <div className={stylesThree.inputLabel}>卡號</div>
                    <input className={stylesThree.inputStyle} 
                    type="text" 
                    placeholder="1111 2222 3333 4444" 
                    onChange={e =>handleCardinfo(e)}/>
                  </div>
                </div>

                <div className={stylesThree.inputLine3}>
                  <div className={stylesThree.inputGroup}>
                    <div className={stylesThree.inputLabel}>有效期限</div>
                    <input 
                    className={stylesThree.inputStyle} 
                    type="text" 
                    placeholder="MM/YY" 
                    onChange={e =>handleCardinfo(e)}/>
                  </div>

                  <div className={stylesThree.inputGroup}>
                    <div className={stylesThree.inputLabel}>CVC / CCV</div>
                    <input className={stylesThree.inputStyle} 
                    type="text" 
                    placeholder="123" 
                    onChange={e =>handleCardinfo(e)}/>
                  </div>
                </div>

              </section>
            </form>

  )
}


export default StepThree;
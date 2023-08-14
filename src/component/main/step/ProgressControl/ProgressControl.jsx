import styles from './ProgressControl.module.css'
import {ReactComponent as RightArrow} from '../../../../asset/right-arrow.svg'
import {ReactComponent as LeftArrow} from '../../../../asset/left-arrow.svg'
import { FormContext } from 'component/Context/FormContext'
import { CartContext } from 'component/Context/CartContext'
import {useContext } from 'react'

export default function ProgressControl({currentStep, handleClickPrev, handleClickNext}) {
  const {formInfo} = useContext(FormContext)
  const {addTotalPrice} = useContext(CartContext)
  
  function handleConfirm(){
   console.log(`
   總金額:${addTotalPrice()}
   持卡人姓名：${formInfo.cardName}
   卡號:${formInfo.cardNumber}
   有效期限：${formInfo.cardExpireDate}
   CVC/CCV：${formInfo.cardCVC}
   `);
  
  }

  return (
  
    <section className={styles.progressControlContainer}>
      <section className={styles.buttonGroup}>
        <button 
        onClick={handleClickPrev}
        className={currentStep === 1 ? `${styles.start}` : `${styles.prev}`}>
          <LeftArrow className={styles.arrowLeft}/>
          上一步
        </button>

        <button 
        onClick={currentStep === 3? handleConfirm :handleClickNext}
        className={styles.next}>
          {currentStep === 3 ? "確認下單" : "下一步"}
          {currentStep < 3 && <RightArrow className={styles.arrowRight}/>}
        </button>
      </section>     
    </section>
  )
}
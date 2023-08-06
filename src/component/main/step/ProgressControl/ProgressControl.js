import styles from './ProgressControl.module.css'
import {ReactComponent as rightArrow} from '../../../../asset/right-arrow.svg'
import {ReactComponent as leftArrow} from '../../../../asset/left-arrow.svg'
export default function ProgressControl({currentStep, handleClickPrev, handleClickNext}) {
  return (
  
    <section className={styles.progressControlContainer}>
      <section className={styles.buttonGroup}>
        <button 
        onClick={handleClickPrev}
        className={currentStep === 1 ? `${styles.start}` : `${styles.prev}`}>
          <leftArrow className={styles.arrowLeft}/>
          上一步
        </button>

        <button 
        onClick={handleClickNext}
        className={styles.next}>
          {currentStep === 3 ? "確認下單" : "下一步"}
          {currentStep < 3 && <rightArrow className={styles.arrowRight}/>}
        </button>
      </section>     
    </section>
  )
}
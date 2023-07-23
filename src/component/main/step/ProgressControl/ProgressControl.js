import styles from './ProgressControl.module.css'
import rightArrow from '../../../../asset/right-arrow.svg'

export default function ProgressControl() {
  return (
    <>
    <hr />
      <section className={styles.next} data-phase="address">
        <button>
          下一步  <img src={rightArrow} alt="rightArrow" />
        </button>
      </section>
       {/* <section className={styles.back} data-phase="shipping">
        <button className={styles.buttonTwo}>
          <img src={rightArrow} alt="rightArrow" style={{transform: 'rotate(180deg'}}/> 上一步 
        </button>
      </section> */}
        
        {/* <button className="next">
          下一步
          <object
            data="./public/icons/right-arrow.svg"
            className="cursor-point"
          ></object>
        </button>
      <section className="button-group" data-phase="credit-card">
        <button className="prev">
          上一步
        </button>
        <button className="next">確認下單</button>
      </section> */}
    </>
  )
}
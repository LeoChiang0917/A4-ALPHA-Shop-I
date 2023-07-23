import styles from './Step1.module.css'
import stylesThree from './Step3.module.css'

export default function StepThree() {
  return (
    <>
    <div className={styles.container}>
        <form className={styles.formOne} data-phase="credit-card">
          <h3>付款資訊</h3>
          <section>
            <div>
                <div>
                <div className={styles.inputLabel}>持卡人姓名</div>
                <input className={stylesThree.groupFirst}
                type="text" placeholder="John Doe" />
              </div>
            </div>
            <div>
              <div>
                <div className={styles.inputLabel}>卡號</div>
                <input className={stylesThree.groupFirst}
                type="text" placeholder="1111 2222 3333 4444" />
              </div>
            </div>
            <div className={styles.group}> 
              <div>
                <div className={styles.inputLabel}>有效期限</div>
                <input className={styles.selectThree} type="text" placeholder="MM/YY" />
              </div>
              <div>
                <div className={styles.inputLabel}>CVC / CCV</div>
                <input className={styles.selectThree} type="text" placeholder={123} />
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
import styles from './Step1.module.css'

export default function StepOne() {
  

    return (
      <>
        <form className={styles.form} data-phase="address">
          <h3 className="form-title">寄送地址</h3>
          <div className={styles.container}>
            <section className="form-body">
              <div className={styles.group}>
                <div>
                  <div className={styles.inputLabel}>稱謂</div>
                  <div className="select-container">
                    <select className={styles.selectOne} defaultValue ="先生">
                      <option>
                        先生
                      </option>
                      <option>女士</option>
                      <option>不明</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className={styles.inputLabel}>姓名</div>
                  <input className={styles.selectTwo} type="text" placeholder="請輸入姓名" />
                </div>
              </div>
              <div className={styles.group}>
                <div>
                  <div className={styles.inputLabel}>電話</div>
                  <input className={styles.selectThree} type="tel" placeholder="請輸入行動電話" />
                </div>
                <div>
                  <div className={styles.inputLabel}>Email</div>
                  <input className={styles.selectThree} type="email" placeholder="請輸入電子郵件" />
                </div>
              </div>
              <div className={styles.group}>
                <div>
                  <div className={styles.inputLabel}>縣市</div>
                  <div className="select-container">
                    <select className={styles.selectOne} required="" defaultValue ="請選擇縣市">
                      <option >請選擇縣市</option>
                      <option>基隆市</option>
                      <option>新北市</option>
                      <option>臺北市</option>
                      <option >桃園市</option>
                      <option>新竹縣</option>
                      <option>新竹市</option>
                      <option >苗栗市</option>
                      <option >苗栗縣</option>
                      <option >臺中市</option>
                      <option >彰化縣</option>
                      <option >彰化市</option>
                      <option >南投市</option>
                      <option>南投縣</option>
                      <option>雲林縣</option>
                      <option >嘉義縣</option>
                      <option >嘉義市</option>
                      <option>臺南市</option>
                      <option>高雄市</option>
                      <option >屏東縣</option>
                      <option >屏東市</option>
                      <option>宜蘭縣</option>
                      <option >宜蘭市</option>
                      <option>花蓮縣</option>
                      <option >花蓮市</option>
                      <option >臺東市</option>
                      <option>臺東縣</option>
                      <option >澎湖縣</option>
                      <option >金門縣</option>
                      <option >連江縣</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className={styles.inputLabel}>地址</div>
                  <input className={styles.selectTwo} type="text" placeholder="請輸入地址" />
                </div>
              </div>
            </section>
          </div>
        </form>
        
      </>
    );
  }
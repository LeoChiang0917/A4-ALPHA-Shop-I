import stylesThree from "./Step3.module.css"


function StepThree () {

  return (

    <form  data-phase="credit-card">
              <h3 class={stylesThree.formTitle}>付款資訊</h3>
              <section class={stylesThree.formBody}>

                <div class={stylesThree.inputLine1}>
                  <div class={stylesThree.inputGroup}>
                    <div class={stylesThree.inputLabel}>持卡人姓名</div>
                    <input class={stylesThree.inputStyle} type="text" placeholder="John Doe" />
                  </div>
                </div>

                <div class={stylesThree.inputLine2}>
                  <div class={stylesThree.inputGroup}>
                    <div class={stylesThree.inputLabel}>卡號</div>
                    <input class={stylesThree.inputStyle} type="text" placeholder="1111 2222 3333 4444" />
                  </div>
                </div>

                <div class={stylesThree.inputLine3}>
                  <div class={stylesThree.inputGroup}>
                    <div class={stylesThree.inputLabel}>有效期限</div>
                    <input class={stylesThree.inputStyle} type="text" placeholder="MM/YY" />
                  </div>

                  <div class={stylesThree.inputGroup}>
                    <div class={stylesThree.inputLabel}>CVC / CCV</div>
                    <input class={stylesThree.inputStyle} type="text" placeholder="123" />
                  </div>
                </div>

              </section>
            </form>

  )
}


export default StepThree;
import "./StepProgress.css";

export default function StepProgress() {
    return (
      <div>   
        <h2 class='registerTitle'>結帳</h2>
  
        <section class='progressContainer'>
  
          <span class='currentGroup' data-phase="address">
            <span class='progressIcon'>
              <span class='text'>1</span>
              {/* <CheckIcon className={styles.checkIcon}/> */}
            </span>
            <span class='progressLabel'>寄送地址</span>
          </span>
  
          <span class='progressBar' data-order="1"></span>
  
          <span class='progressGroup' data-phase="shipping">
            <span class='progressIcon'>
              <span class='text'>2</span>
            </span>
            <span class='progressLabel'>運送方式</span>
          </span>
  
          <span class='progressBar' data-order="2"></span>
  
          <span class='progressGroup' data-phase="credit-card">
            <span class='progressIcon'>
              <span class='text'>3</span>
            </span>
            <span class='progressLabel'>付款資訊</span>
          </span>
  
        </section>
      </div>       
    )
  }
import  "./StepProgress.css";

export default function StepProgress({currentStep}) {
    return (
      <div>   
        <h2 className='registerTitle'>結帳</h2>
  
        <section className='progressContainer'>
  
          <span className={currentStep===1? `currentGroup` : `progressGroup`} data-phase="address">
            <span className='progressIcon'>
              <span className='text'>1</span>
              {/* <CheckIcon classNameName={styles.checkIcon}/> */}
            </span>
            <span className='progressLabel'>寄送地址</span>
          </span>
  
          <span className='progressBar' data-order="1"></span>
  
          <span className={currentStep===2? `currentGroup` : `progressGroup`} data-phase="shipping">
            <span className='progressIcon'>
              <span className='text'>2</span>
            </span>
            <span className='progressLabel'>運送方式</span>
          </span>
  
          <span className='progressBar' data-order="2"></span>
  
          <span className={currentStep===3? `currentGroup` : `progressGroup`} data-phase="credit-card">
            <span className='progressIcon'>
              <span className='text'>3</span>
            </span>
            <span className='progressLabel'>付款資訊</span>
          </span>
  
        </section>
      </div>       
    )
  }
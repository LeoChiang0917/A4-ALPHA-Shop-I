
import { useState } from 'react'
import Header from 'component/Header/Header';
import ProgressControl from 'component/main/step/ProgressControl/ProgressControl';
import StepProgress from 'component/main/Stepform/StepProgress';
import StepOne from 'component/main/Stepform/Step1/Step1';
import StepTwo from 'component/main/Stepform/Step2/Step2';
import StepThree from 'component/main/Stepform/Step3/Step3';
import CartSheet from 'component/main/Cart/Cart';
import styles from './Outermain.module.css'

export default function Main () {
  const [page, setepage] = useState(1)
  function handleClickBack(){
    if(page >1){
      setepage(page -1)
    }
  }
  
  function handleClickNext(){
    if(page <3){
      setepage(page +1)
    }
  }
  return (    
      <div>
        <Header/>
        <div>
         <StepProgress
         currentStep={page}
         />
         </div>
          <section className={styles.formContainer}>
          <div>
        {page === 1 && <StepOne />}
        {page === 2 && <StepTwo />}
        {page === 3 && <StepThree />}
          <ProgressControl
          currentStep={page}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickBack}
          />
          </div> 
          <CartSheet/>
        </section>  
      </div>
    );
  }
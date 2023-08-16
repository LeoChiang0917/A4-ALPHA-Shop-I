
import { useState } from 'react'
import Header from 'component/Header/Header';
import ProgressControl from 'component/ProgressControl/ProgressControl';
import StepProgress from 'component/Stepform/StepProgress';
import StepOne from 'component/Stepform/Step1/Step1';
import StepTwo from 'component/Stepform/Step2/Step2';
import StepThree from 'component/Stepform/Step3/Step3';
import CartSheet from 'component/Cart/Cart';
import styles from './Main.module.css'

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
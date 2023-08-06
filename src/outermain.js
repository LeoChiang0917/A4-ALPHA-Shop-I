
import { useState } from 'react'
import Header from './component/Header/Header';
import ProgressControl from './component/main/step/ProgressControl/ProgressControl';
import StepProgress from './component/main/Stepform/StepProgress';
import StepOne from './component/main/Stepform/Step1/Step1';
import StepTwo from './component/main/Stepform/Step2/Step2';
import StepThree from './component/main/Stepform/Step3/Step3';
import CartSheet from './component/main/cart/Cart'
import styles from './outermain.module.css'
import { CartContextProvider } from './component/CartContext';

export default function Main () {
  const [page, satepage] = useState(1)
  function handleClickBack(){
    if(page >1){
      satepage(page -1)
    }
  }
  
  function handleClickNext(){
    if(page <3){
      satepage(page +1)
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
         <CartContextProvider>
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
        </CartContextProvider>
      </div>
    );
  }
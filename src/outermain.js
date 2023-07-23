
import { useState } from 'react'
import Header from './component/Header/Header';
import ProgressControl from './component/main/step/ProgressControl/ProgressControl';
import StepProgress from './component/main/Stepform/StepProgress';
import StepOne from './component/main/Stepform/Step1/Step1';
import CartSheet from './component/main/cart/Cart'
import styles from './outermain.module.css'

export default function Main () {
    return (    
      <div>
        <Header/>
        <div>
         <StepProgress/>
         </div>
          <section className={styles.formContainer}>
          <StepOne/> 
          <CartSheet/>
        </section>
        <ProgressControl/>
      </div>
    );
  }
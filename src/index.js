import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import Header from './component/Header/Header';
import ProgressControl from './component/main/step/ProgressControl/ProgressControl';
import StepProgress from './component/main/Stepform/StepProgress';
import StepOne from './component/main/Stepform/Step1/Step1';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <StepProgress/>
    <StepOne/>
    <ProgressControl/>
  </React.StrictMode>,
)


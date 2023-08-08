import { createContext, useState } from "react"

const FormContext = createContext()

let CardInfo= {
    cardName:'',
    cardNumber:'',
    cardExpireDate:'',
    cardCVC:''
}

function CardInfoprovider({children}){
   const [formInfo, SetformInfo] = useState(CardInfo)

   function handleCardinfo(e){
    SetformInfo({...formInfo, [e.target.name]:e.target.value })
  
}


   return(
    <FormContext.Provider value={{formInfo, SetformInfo, handleCardinfo}}>
      {children}
    </FormContext.Provider>
  )
}

export {FormContext, CardInfoprovider}
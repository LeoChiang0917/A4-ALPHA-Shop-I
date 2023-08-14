import { createContext, useState } from "react"


let CardInfo= {
    cardName:'',
    cardNumber:'',
    cardExpireDate:'',
    cardCVC:''
}

const FormContext = createContext()

function CardInfoprovider({children}){
   const [formInfo, SetformInfo] = useState(CardInfo)


   return(
    <FormContext.Provider value={{formInfo, SetformInfo}}>
      {children}
    </FormContext.Provider>
  )
}

export {FormContext, CardInfoprovider}
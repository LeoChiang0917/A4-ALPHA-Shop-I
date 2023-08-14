import { CartContextProvider } from 'component/Context/CartContext';
import { CardInfoprovider } from 'component/Context/FormContext';
import Main from 'component/Outermain/Outermain';
 
export function App () {
  return (
    <CartContextProvider>
      <CardInfoprovider>
        <Main />
      </CardInfoprovider>
    </CartContextProvider>
  );
}
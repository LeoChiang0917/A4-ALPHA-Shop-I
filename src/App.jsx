import { CartContextProvider } from 'component/Context/CartContext';
import { CardInfoprovider } from 'component/Context/FormContext';
import Main from 'component/Main/Main';
 
export function App () {
  return (
    <CartContextProvider>
      <CardInfoprovider>
        <Main />
      </CardInfoprovider>
    </CartContextProvider>
  );
}
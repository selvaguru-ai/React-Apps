import logo from './logo.svg';
import Promo from './Promo';
import Cart from './Cart';

const data = {
  heading: "90% off on all items",
  message: "Must go faster!"
}

function App() {
  return (
    <>
    <Promo heading = {data.heading} message = {data.message}/>
    <Cart/>
    </>
  )
}

export default App;

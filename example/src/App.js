import logo from './logo.svg';
import Promo from './Promo';

const data = {
  heading: "90% off on all items",
  message: "Must go faster!"
}

function App() {
  return (
    <Promo heading = {data.heading} message = {data.message}/>
  )
}

export default App;

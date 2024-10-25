import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="App">
     <Navigation/>

     <div>
      {/* <HomePage/> */}
      <Product/>
     </div>

     <Footer/>
    </div>
  );
}

export default App;

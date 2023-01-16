import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/product';
import productsData from './data/productsData';
import Skaiciuokle from './components/skaiciuokle';
import Krepselis from "./components/krepselis/krepselis";
import Footer from "./components/footer";
import {useState} from "react";
import ProductsContext, {ProductContextProvider} from "./components/context/productsContext";
import Anekdotas from "./components/anekdotas/anekdotas";

function App() {
    /*
  const prekes=productsData;
 
  let products=[];
  
  for (let i=0; i<prekes.length; i++){
    products.push(
      <div class="col-md-4">
        <Product key={prekes[i].title} product={prekes[i]}></Product>
      </div>
    );
  }
  */

    return (
        <div className="container">
          <ProductContextProvider>
              <Anekdotas></Anekdotas>
              <Krepselis ></Krepselis>
              <nav className="navbar fixed-bottom bg-body-tertiary">
                    <div className="container-fluid">
                        <Footer></Footer>
                    </div>
              </nav>
          </ProductContextProvider>
        </div>
    )
}

export default App;

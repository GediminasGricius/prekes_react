import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/product';
import productsData from './data/productsData';

function App() {
  const prekes=productsData;
 
  let products=[];
  
  for (let i=0; i<prekes.length; i++){
    products.push(
      <div class="col-md-4">
        <Product product={prekes[i]}></Product>
      </div>
    );
  }
  
 /*
 prekes.forEach((product)=>{
  products.push(
    <div class="col-md-4">
      <Product product={product}></Product>
    </div>
  );
 });
 */
/*
products=prekes.map((product)=>{
  return (
  <div class="col-md-4">
    <Product product={product}></Product>
  </div>)
});
*/
  return (
    <div class="container">
      <h3 class="mt-5">Specialus pasiūlymas</h3>
      <div class="row mt-3">
        <div class="col-md-6">
          <Product product={prekes[1]}></Product>
        </div>
        <div class="col-md-6">
          <Product product={prekes[2]}></Product>
        </div>

      </div>
      <h3 class="mt-5">Visos prekės</h3>
      <div class="row mt-3">
        { products }
        
      </div>
      
    </div> 
     
  );
}

export default App;

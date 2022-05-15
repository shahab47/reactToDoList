import React from 'react';
import Product from './components/productList';


function App() {
  const productList = [
        {id:1, name:'book1'},
        {id:2, name:'book2'},
        {id:3, name:'book3'}
  ]
  return (
    <div className="App">
      <Product item = {productList}/>
    </div>
  );
}

export default App;

import React from 'react';
import Product from './Product';

function Products({products}) {
   
  return (
    <div>
        {products.map((elt)=>(<Product key={elt.id} product={elt}/>))}
    </div>
  )
}

export default Products
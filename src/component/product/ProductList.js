import React from 'react';
import Product from './Product';

export default ({ productList, addProductToCart, removeProductFromCart }) => (<div className="row mt-5">{productList.map(product => (<Product {...product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />))}</div>);

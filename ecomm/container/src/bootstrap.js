import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from  'cart/CartShow';

console.log('This is the container client bootstrap.js')

const cartDiv = document.querySelector('#cart-div');
const productsDiv = document.querySelector('#products-div');

productMount(productsDiv);
cartMount(cartDiv);

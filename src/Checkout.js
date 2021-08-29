import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [ {basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
          
            <div className= "checkout__left">
            <h2 className="checkout__base">
                *Optional Image*</h2>
               {/* <img className='checkout__ad' src = ""> */}
                <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">
                Yours Shoping Basket</h2>
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    />
                ))}

                </div> 
            </div>
            
            
            <div className="checkout__right">
              <Subtotal /> 
               
                
            </div>
          
        </div>
    );
}

export default Checkout

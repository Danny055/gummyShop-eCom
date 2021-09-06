import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [ {basket, user}, dispatch] = useStateValue();
 
    return (
        <div className="checkout">
           
            <img
                className="home__image"
                src="https://image.freepik.com/free-vector/geometric-shapes-background-eighties-style_23-2148249866.jpg"
                alt=""
            />
            <div className= "checkout__left">
            {/*CARUSEL/AD IMAGES*/}
            
            <div>
                <h2 className="checkout__title">
                Your Shoping Basket</h2>
                

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

import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';


function Payment() {
    const [ {basket, user}, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment__container'>
                
                <h1>
                    Checkout(
                        <Link to="./checkout">{basket.length} items
                        </Link>)
                </h1>                
                
                {/*payment section Deliver Address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Fake Add.</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/*payment section Review Items*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
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

                {/*payment section Payment Method*/}
                <div className='payment__section'>
                  <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

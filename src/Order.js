import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format';
import './Order.css'
import moment from "moment";

function Order({ order }) {
    return (
        <div className='order'>
            <div className="home__container">
            <img
                className="home__image"
                src="https://image.freepik.com/free-vector/geometric-shapes-background-eighties-style_23-2148249866.jpg"
                alt=""
            />
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                <h3 className = "order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
        </div>
    )
}

export default Order

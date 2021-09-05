import React , { useEffect } from 'react';
import Header from'./Header';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51JTyGXARMYnaIVvTDG9bridUzBbk6wM9wEL4zs6HBnbvqzPW2TD1pkuZQAIa1nhnj4Vr52GHRL1Y9m8ODleDmc6x00Yb0rhaHN');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //dinamic if statement for React
    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>> ', authUser);

      if (authUser){
        //user is logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
    <div className="app">
    
      <Switch>
      <Route path="/orders">
        <Header />
        <Orders />
        </Route>
       
        <Route path="/login">
         <Login />
        </Route>
       
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
           <Payment  />
          </Elements>
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;

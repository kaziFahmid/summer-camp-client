import React from 'react'
import Heading from '../Heading/Heading'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_paymentkey);
export default function Payment() {
    const myselectedclass=useLoaderData()
   
  return (
    <div >
      <Heading title="Payment"/>

   <Elements stripe={stripePromise}>
      <CheckoutForm {...myselectedclass}/>
    </Elements>

    </div>
  )
}

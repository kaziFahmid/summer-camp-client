import React from 'react'
import Heading from '../Heading/Heading'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe('pk_test_51NEswgCkTlza3PsZYkJZeN1MVRfeFiME6AuW1KdUT5H0RMRdEPbhGDp7H7RwDu1mb2jXc4Fe2zu8z54D93P1zQtF00x4cLL2WN');
export default function Payment() {
    const myselectedclass=useLoaderData()
   
  return (
    <div>
      <Heading title="Payment"/>
      <Elements stripe={stripePromise}>
      <CheckoutForm {...myselectedclass}/>
    </Elements>
    </div>
  )
}

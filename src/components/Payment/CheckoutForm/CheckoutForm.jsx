import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useAuth from '../../UseAuth/useAuth';
import useSelectedClass from '../../useSelectedClass/useSelectedClass';
import './common.css'
import Swal from 'sweetalert2';
export default function CheckoutForm ({_id,seat,classId,image,price,instructorname,name,email}) {
console.log(price)

    const stripe = useStripe();
  const elements = useElements();
  const{user}=useAuth()
  const[cardError,setCardError]=useState('')
const[clientSecret,setClientSecret]=useState('')
const[processing,setProcessing]=useState(false)
const[refetch,myselectedclass]=useSelectedClass()
const[transactionId,setTransactionId]=useState('')
useEffect(()=>{
    axios.post('/create-payment-intent',{price})
    .then(res=>{  setClientSecret(res.clientSecret) })
  
},[price])







const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    const card = elements.getElement(CardElement);
  
    if (card == null) {
      return;
    }
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
  
    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('[PaymentMethod]', paymentMethod);
    }
  
    console.log(clientSecret);
    setProcessing(true)
    try {
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'unknown email',
              name: user?.displayName || 'unknown name',
            },
          },
        }
      );
  
      if (confirmError) {
        setCardError(confirmError);
      }
  
      console.log(paymentIntent);
      setProcessing(false)
      if(paymentIntent.status==='succeeded'){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Payment Successful',
          showConfirmButton: false,
          timer: 1500
        })
        setTransactionId(paymentIntent.id)

        const payment={myemail:user?.email,instructorname,transactionId:paymentIntent.id,email,name,image,classId,price,class:_id,status:'paid',date:new Date()}

        axios.post(`/payments/${classId}`,payment)
        .then(res=>refetch())
  
      }
    } catch (error) {
      console.log('Error confirming card payment:', error);
    }
  };


  return (
  <>
    <div className='mt-36 '>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn bg-pink-500 text-white mt-4
      ' disabled={!stripe||!clientSecret ||processing}>
        Pay
      </button>
    </form>

    {cardError&&<p className='text-red-500'>{cardError}</p>}

    {transactionId&&<p className='text-green-500'>Transaction complete with transactionId :{transactionId} </p>}
    </div>
  
  
  </>
  )
}

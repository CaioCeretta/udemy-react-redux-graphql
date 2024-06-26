import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';



import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';


import Button, { BUTTON_TYPE_CLASSES } from '../Button';

import { StripeCardElement } from '@stripe/stripe-js';
import './styles.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const cardDetails = elements.getElement(CardElement)

    if(!cardDetails) {
      return;
    }

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Caio Ceretta',
        },
      },
    });

    const ifValidCardElement = (card: StripeCardElement | null):
      card is StripeCardElement => card !== null

    if(!ifValidCardElement(cardDetails)) return;


    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <div className="payment-form-container">
      <form className='form-container' onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button
          type='submit'
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          paymentLoading={isProcessingPayment}
          isPayment={true}
        >
          Pay Now
        </Button>
      </form>
    </div> 
  );
};
export default PaymentForm;

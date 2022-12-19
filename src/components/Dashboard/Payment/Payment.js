import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutform from './CheckOutform';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();
    console.log(data)
    const { bookname, bookprice, time } = data;

    return (
        <div>
            <h3 className='text-3xl'>Payment for {bookname}</h3>
            <div className="divider"></div>
            <p className='text-xl'>Please pay: <strong>${bookprice}</strong> for the order on {time}</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutform
                        booking={data}
                    ></CheckOutform>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
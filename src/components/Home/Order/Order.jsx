import { useEffect, useState } from 'react';
import './Order.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Order = () => {

  useEffect(() => {
    Aos.init();
  }, [])






  return (
    <div data-aos="fade-left">
      <div className='my-16'>
        <h2 className='text-6xl text-center  text-orange-500'> <span className='mx-5'>Discount!!!</span><span className='mx-5'>Discount!!!</span><span className='mx-5'>Discount!!!</span></h2>
      </div>

      <div className='grid md:grid-cols-2 md:gap-6  bg-yellow-400 '>
        <div className='pt-28 ps-9 pb-16'>
          <h2 className='text-4xl text-center p-10 '>Special 15% Discount on All Products!!!!!</h2>
          <p className='text-2xl'>The offer is valid for limited time. Grab the offer and Order Now!!!!</p>

          <p className='text-2xl text-center mb-16'>Offer Ends in:</p>
          <div className='ps-28'>

            <div className="grid grid-flow-col gap-5 ps-16 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl ">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='pb-9 pt-24'>
            <h2 className='text-2xl ps-28 pt-12'>5 Simple Steps to get your child an awesome toy.</h2>
            <ul className="steps steps-vertical ps-28 pt-5 text-2xl ">
              <li className="step step-primary">Register/Login</li>
              <li className="step step-primary">Choose Toy</li>
              <li className="step step-primary">Add to Cart</li>
              <li className="step step-primary">Payment Via Credit Card</li>
              <li className="step step-primary">Receive Products from your doorstep</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
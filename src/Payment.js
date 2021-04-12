import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue;
    return (
        <div className="payment">
            <div className="payment__container">
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>q23 React Lane</p>
                        <p>Kampl, Ug</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment__item'>
                        
                    </div>
                </div>
                <div className='payment__section'>

                </div>
            </div>
        </div>
    )
}

export default Payment

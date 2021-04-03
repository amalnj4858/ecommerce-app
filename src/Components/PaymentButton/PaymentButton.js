import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const PaymentButton = ({price}) =>{

    const priceForStripe = price*100;
    const tokenKey = 'pk_test_51IbhVpSDfbSX94kQeR2XtNamShU1nrQmpaAm7H3KfM69XbHpg2w5eB2GZY5sAncXyF8uvIpCA2AxzTGY1cYQU92900o7LXT6IF';

    const onToken = token =>{
        console.log(token);
        alert('Succsessful! :)');
    }

    return(
        <StripeCheckout 
            name = 'CROWN CLOTHING'
            description = 'Payment'
            image = 'https://sendeyo.com/en/f3eb2117da'
            shippingAddress
            billingAddress
            amount = {priceForStripe}
            stripeKey = {tokenKey}
            token = {onToken}
        />
    )
}

export default PaymentButton;
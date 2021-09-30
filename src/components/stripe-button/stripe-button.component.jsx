import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton= ({price}) => {
    const priceForStripe= price*100;
    const publishableKey = "pk_test_51JfSGhGVlb1iAzn4KvEB9ROeRblCA5V8KKcJLfl3ltPmxa3zkPlqcH6kNnP53K6JzmazBco2KiiBXuzwrIS9gN5e00RGdkKAuX";
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}

        
        />
    );
}

export default StripeCheckoutButton;
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice=cart.reduce((total,prd)=>total+prd.price,0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        totalPrice = totalPrice + prd.price;
    }

    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if(totalPrice>15){
        shipping=4.99;
    }
    else if(totalPrice>0){
        shipping=12.99
    }

    const tax =( totalPrice/10).toFixed(2);
    const allTotal=(Number(tax)+totalPrice+shipping);

    const formatNumber=num=>{
        const precisition = num.toFixed(2);
        return Number(precisition);
    }
     
    return (
        <div>
            <h4>Order Summary </h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber( totalPrice)}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax: {tax}</small></p>
            <p>Total Price:{formatNumber( allTotal) }</p>
        </div>
    );
};

export default Cart;
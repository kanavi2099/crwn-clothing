export const addITemToCart= (cartItems, cartItemToAdd ) =>{

    const existingCartITem = cartItems.find( item=> item.id===cartItemToAdd.id );
    if(existingCartITem){
        return cartItems.map( item=>  item.id===cartItemToAdd.id? {...item , quantity: item.quantity+1  } : item );
    }


    return [...cartItems, {...cartItemToAdd, quantity: 1} ];

}

export const removeItemFromCart= (cartItems, cartItemToRemove) => {

    const existingCartITem = cartItems.find( item=> item.id===cartItemToRemove.id );
    console.log( existingCartITem );
    if( existingCartITem.quantity===1 ){
        return cartItems.filter( item=> item.id!==cartItemToRemove.id );
    }

    return cartItems.map( item => item.id===cartItemToRemove.id? {...item, quantity:item.quantity-1 } : item );

}
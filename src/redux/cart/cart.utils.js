export const addITemToCart= (cartItems, cartItemToAdd ) =>{

    const existingCartITem = cartItems.find( item=> item.id===cartItemToAdd.id );
    if(existingCartITem){
        return cartItems.map( item=>  item.id===cartItemToAdd.id? {...item , quantity: item.quantity+1  } : item );
    }


    return [...cartItems, {...cartItemToAdd, quantity: 1} ];

}
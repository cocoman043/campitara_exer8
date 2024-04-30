import {useEffect} from 'react';

const Card = (object) => {
  const {item, cart} = object;

  const addToCart = (event) => {
    console.log(item.name)
    cart.push(item.name);
  }

  return(
    <div className='card'>
      <img src={item.url} alt={item.name}/>
      <p className='item-name'>{item.name}</p>
      <p className='add-to-cart' onClick={addToCart}>Add to Cart</p>
    </div>
  )
}

export default Card;

import { useState, useEffect } from "react";

const Cart = (object) => {
  const { cart, setCart, setShowCart } = object;

  const toggleCart = () => {
    setShowCart(false)
  }

  const deleteItem = (event) => {
    console.log(event.target.id);
    cart[event.target.id] -= 1;
    if (cart[event.target.id] === 0) {
      delete cart[event.target.id]
    }
    setCart(cart)
  }

  useEffect(() => {
    console.log('Cart updated');
    console.log(cart);
    setCartKeys(Object.keys(cart));
    console.log(cartKeys);
  }, [cart])

  const [cartKeys, setCartKeys] = useState(Object.keys(cart));

  return (
    <div className="overlay">
      <div className='cart'>
        <button onClick={toggleCart}>CLOSE</button>
        {cartKeys.map((itemName, i) => (
          <div className='item' key={i}>
            {itemName}: {cart[itemName]}
            <button id={itemName} onClick={deleteItem}>X</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;

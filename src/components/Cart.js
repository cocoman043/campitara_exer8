import { useState, useEffect } from "react"

const Cart = (object) => {
  const { cart, setCart, setShowCart } = object;

  const toggleCart = () => {
    setShowCart(false)
  }

  const deleteItem = (event) => {
    const itemName = event.target.id;
    const updatedCart = { ...cart }; // Create a copy of the cart object
    updatedCart[itemName] -= 1; // Update the copy
    if (updatedCart[itemName] <= 0) {
      delete updatedCart[itemName]; // Remove the item if quantity is zero or less
    }
    setCart(updatedCart); // Update the state with the new copy
  };

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
        <button className='close-button' onClick={toggleCart}>CLOSE</button>
        {cartKeys.map((itemName, i) => (
          <div className='item' key={i}>
            {itemName}
            <div className="right-side">
              {cart[itemName]}
              <button id={itemName} onClick={deleteItem}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;

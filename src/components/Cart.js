import { useEffect } from "react";

const Cart = (object) => {
  const { cart, setCart, setShowCart } = object;

  const toggleCart = () => {
    setShowCart(false)
  }

  const deleteItem = (event) => {
    console.log(event.target.id);
    cart[event.target.id] -= 1;
    if (cart[event.target.id] == 0) {
      delete cart[event.target.id]
    }
    setCart(cart)
  }

  useEffect(() => {
    console.log('Cart updated');
  }, [cart])
  return (
    <div className="overlay">
      <div className='cart'>
        <button onClick={toggleCart}>CLOSE</button>
        {Object.keys(cart).map((itemName, i) => (
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

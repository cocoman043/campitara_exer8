const Card = (object) => {
  const { item, cart, setCart } = object;

  const addToCart = (event) => {
    console.log(item.name)
    // setCart([...cart, item.name]);
    if (cart[item.name]) {
      cart[item.name] += 1;
      setCart(cart)
    } else {
      cart[item.name] = 1;
      setCart(cart);
    }
  }

  return (
    <div className='card'>
      <img src={item.url} alt={item.name} />
      <p className='item-name'>{item.name}</p>
      <p className='add-to-cart' onClick={addToCart}>Add to Cart</p>
    </div>
  )
}

export default Card;

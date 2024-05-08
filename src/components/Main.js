import Card from './Card';
import Cart from './Cart';
import { useState } from 'react';

const Main = () => {
  const items = [
    {
      url: 'https://i5.walmartimages.com/seo/Great-Eastern-Evangelion-GE-52302-Rei-Plugsuit-Stuffed-Plush-8-Multi-Colored_314d9e4f-905a-4062-9a60-95f9d03cbfb1.fdd4fab77a118733986187bd93fa7464.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
      name: 'Great Eastern Evangelion GE-52302 Rei Plugsuit Stuffed Plush, 8", Multi-Colored',
    },
    {
      url: 'https://m.media-amazon.com/images/I/41UEBm0oscL._AC_.jpg',
      name: ' Touhou Plushie Series 19 - Satori Komeiji Fumofumo satori. [Import] ',
    },
    {
      url: 'https://m.media-amazon.com/images/I/51RWb6f7q7L._AC_SL1133_.jpg',
      name: ' Anime Fumo Plush Doll Stuffed Doll Figure Doll Toy Grils 22cm 9" ',
    },
    {
      url: 'https://www.mazda.ph/wp-content/uploads/2023/04/mazda6-banner.jpg',
      name: 'Mazda 6'
    }
  ]

  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const printCart = () => {
    console.log(cart);
    setShowCart(!showCart);
  }

  return (
    <div className='tree'>
      <div className='main'>
        {items.map((element) => (
          <Card item={element} cart={cart} setCart={setCart} />
        ))}
      </div>
      <button className='cart-button' onClick={printCart}>Check Cart!</button>
      {showCart && <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} />}
    </div>
  )
}

export default Main;

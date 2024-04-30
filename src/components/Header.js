const Header = () => {
  const menus = [
    { name: "appliances", url: "#", id: 1},
    { name: "groceries", url: "#", id: 2},
    { name: "gadgets", url: "#", id: 3},
    { name: "clothing", url: "#", id: 4},
  ];
  return (
    <div className='flex-container'>
      <p className='header-title'>LAZADO</p>
      <ul className='navigation-buttons'>
        {menus.map((item) => 
          <a key={item.id} className='navigation-button' href={item.url} id={item.id}>{item.name}</a>
        )}
      </ul>
    </div>
  )
}
export default Header;

import React from 'react'
import "../App.css"
import MenuItem from './MenuItem'; // Corrected import statement
import Menu from './Menu';

function HomePage() {
  return (
    <div>
       <div className="App">
      <h1>Menu</h1>
      <div className="menu-container">
        {Menu.map(item => (
          <MenuItem 
            key={item.id}
            image={item.image}
            name={item.name}
            category={item.category}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default HomePage

import React from 'react'
function MenuItem({ image, name, category, price, description }) {
    return (
      <div className="menu-item">
        <img src={image} alt={name} className="menu-item-image" />
        <h2 className="menu-item-name">{name}</h2>
        <p className="menu-item-category">{category}</p>
        <p className="menu-item-price">{price}</p>
        <p className="menu-item-description">{description}</p>
      </div>
    )
}

export default MenuItem

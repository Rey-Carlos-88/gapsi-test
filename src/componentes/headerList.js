import React from 'react'
import Logo from '../assets/icon/logo.png'
import Cart from '../assets/images/carrito.jpg'

const HeaderList = () => {
  return (
    <>
    <div className='content-all'>
        <div className='content-header'>
            <div className='content-header-text'>
                <h1>
                    e-Commerce Gapsi
                </h1>
            </div>

            <div className='content-header-logo'>
                <img src={Logo} />
            </div>
           
        </div>
        <div className='content-carrito'>
            <img src={Cart}/>
        </div>
    </div>
    </>
  )
}

export default HeaderList;

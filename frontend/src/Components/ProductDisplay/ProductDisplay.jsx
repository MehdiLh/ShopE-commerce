import React, { useContext } from 'react'
import './ProductDisplay.css'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-Wtsp">
                <button>
                    <img src={whatsapp_icon} alt="" />
                    <div className="text-container">
                        <p>BoisLuxe Sales</p>
                        <span>Commander via WhatsApp</span>
                    </div>
                </button>
            </div>
            <div className="productdisplay-right-cart">
                <button onClick={ () => {addToCart(product.id) }}>ADD TO CART</button>
            </div>

            <div className='descriptionbox'>
                <div className="descriptionbox-navigator">
                    <div className="descriptionbox-nav-box">Description</div>
                </div>
                <div className="descriptionbox-description">
                   <p>{product.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
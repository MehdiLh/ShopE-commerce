import React from 'react'
import './Footer.css'
import video from '../Assets/videopag.mp4'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-left">
            <div className="footer-logo">
                <h6>LUXE BOIS</h6>
                <p>
                Bienvenue chez Luxe Bois, votre magasin de meubles incontournable au Maroc. 
                Découvrez notre large sélection de meubles de qualité à Casablanca. 
                Inspirés par l'essence du Maroc, nos meubles combinent style et fonctionnalité 
                pour créer des espaces intérieurs exceptionnels. Notre équipe dévouée vous assure 
                des meubles durables, fabriqués avec soin.
                </p>
            </div>
        </div>
        <div className="footer-mid">
            <video controls width="250" src={video}>
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="footer-right">
            <h6>Contact</h6>
            <p>
             , Casablanca 20000
            </p>
             <p>
             info@example.com
            </p>
            <p>
             + 212 234 567 88
            </p>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="Instagram" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="WhatsApp" />
                </div>
            </div>
        </div>
        <div className="footer-copyright-bot">
            <p> © 2024 Copyright :
            <Link style={{ textDecoration: 'none'}} to='/'> LUXE BOIS</Link>
            </p>
        </div>
    </div>
  )
}

export default Footer

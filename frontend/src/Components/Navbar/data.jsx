import { FaBolt, FaBriefcase, FaAngleDoubleRight } from "react-icons/fa";
import React from "react";
import { Link } from 'react-router-dom';

const sublinks = [
  {
    page: "Accueil",
    links: [],
    url: "/products",
  },
  {
    page: "Nos Produits",
    links: [
      { label: "Mailleurs Ventes", icon: <FaBolt />, url: "/products" },
      { label: <Link style={{ textDecoration: 'none'}} to='/salons'>SALONS</Link>,
        icon: <FaAngleDoubleRight /> , url: "/salons" },
      { label: <Link style={{ textDecoration: 'none'}} to='/canapes'>CANAPÉS</Link>,
       icon: <FaAngleDoubleRight /> ,url: "/canapes" },
      { label: <Link style={{ textDecoration: 'none'}} to='/chambre'>CHAMBRE</Link>,
       icon: <FaAngleDoubleRight /> ,url: "/chambre" },
      { label: <Link style={{ textDecoration: 'none'}} to='/tables'>TABLES</Link>,
       icon: <FaAngleDoubleRight /> ,url: "/tables" },
      { label: <Link style={{ textDecoration: 'none'}} to='/chaises'>CHAISES</Link>,
       icon: <FaAngleDoubleRight /> ,url: "/chaises" },
      { label: <Link style={{ textDecoration: 'none'}} to='/jardin'>JARDIN</Link>,
       icon: <FaAngleDoubleRight /> ,url: "/jardin" },
      { label: <Link style={{ textDecoration: 'none'}} to='/meubles'>MEUBLES</Link>,
       icon: <FaAngleDoubleRight /> ,url: "/meubles" },
    ],
  },
  {
    page: "A Propos",
    links: [
      { label: "La marque", icon: <FaBriefcase />, url: "/products" },
      { label: "FAQ", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;

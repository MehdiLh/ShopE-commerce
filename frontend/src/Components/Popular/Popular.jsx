import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';
import trend_image from '../Assets/trend1.png';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularproducts')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <div className='popular'>
      <div className="popular-image">
        <img src={trend_image} alt="Tendance" />
      </div>

      <div className="popular-items">
        <h1>SUIVEZ LA TENDANCE</h1>
        <hr />
        <div className="popular-item-grid">
          {popularProducts.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;

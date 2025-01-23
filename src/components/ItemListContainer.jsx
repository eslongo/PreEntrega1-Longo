import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let productsData = [];

      if (categoryId === 'components') {
        productsData = [
          { id: 1, name: 'Keyboard', description: 'Mechanical keyboard', price: '$50', image: 'TECLADO.png' },
          { id: 2, name: 'Monitor', description: '27 inch monitor', price: '$150', image: 'MONITOR.png' },
          { id: 3, name: 'Mouse', description: 'Wireless mouse', price: '$25', image: 'MOUSE.png' }
        ];
      } else if (categoryId === 'ornaments') {
        productsData = [
          { id: 4, name: 'Plant', description: 'Decorative plant', price: '$30', image: 'PLANTA.png' },
          { id: 5, name: 'Clock', description: 'Vintage wall clock', price: '$40', image: 'RELOJ.png' }
        ];
      }

      setProducts(productsData);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={`/assets/${product.image}`} alt={product.name} className="product-image" />
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

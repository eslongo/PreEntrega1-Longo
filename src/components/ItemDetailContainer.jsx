import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtenemos el id del producto desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener los detalles del producto
    const fetchProduct = async () => {
      const productData = await fetch(`/api/product/${id}`).then(res => res.json());
      setProduct(productData);
    };

    fetchProduct();
  }, [id]); // Este efecto se ejecuta cada vez que cambia el id del producto

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="item-detail-container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.image} alt={product.name} />
      {/* Aquí puedes agregar más detalles del producto */}
    </div>
  );
};

export default ItemDetailContainer;

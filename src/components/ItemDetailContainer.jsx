import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simular una llamada para obtener los datos del producto
    const fetchProduct = async () => {
      const allProducts = [
        { id: 1, name: "Keyboard", description: "Mechanical keyboard", price: "$50", image: "TECLADO.png" },
        { id: 2, name: "Monitor", description: "27 inch monitor", price: "$150", image: "MONITOR.png" },
        { id: 3, name: "Mouse", description: "Wireless mouse", price: "$25", image: "MOUSE.png" },
        { id: 4, name: "Plant", description: "Decorative plant", price: "$30", image: "PLANTA.png" },
        { id: 5, name: "Clock", description: "Vintage wall clock", price: "$40", image: "RELOJ.png" }
      ];

      const foundProduct = allProducts.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleSubtract = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleBuy = () => alert(`Compraste ${quantity} unidad(es) de ${product.name}`);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="item-detail-container">
      <div className="image-container">
        <img src={`/assets/${product.image}`} alt={product.name} />
      </div>
      <div className="details-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Precio: {product.price}</p>
        <div className="quantity-container">
          <button onClick={handleSubtract}>-</button>
          <span>{quantity}</span>
          <button onClick={handleAdd}>+</button>
        </div>
        <button className="buy-button" onClick={handleBuy}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

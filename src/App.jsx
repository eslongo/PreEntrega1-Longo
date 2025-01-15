import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; // Importamos el componente de detalle

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <Router>
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to our store!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} /> {/* Ruta para las categorías */}
        <Route path="/item/:id" element={<ItemDetailContainer />} /> {/* Ruta para el detalle de un producto */}
      </Routes>
    </Router>
  );
}

export default App;

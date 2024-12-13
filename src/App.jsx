// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';  // Asegúrate de que la ruta es correcta
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [cartItems, setCartItems] = useState(0);  // Estado para los productos en el carrito

  return (
    <Router>
      <NavBar cartItems={cartItems} /> {/* Pasamos la cantidad al Navbar */}
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to our store!" />} />
        {/* Aquí podrías agregar más rutas si lo necesitas */}
      </Routes>
    </Router>
  );
}

export default App;

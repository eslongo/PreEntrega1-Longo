import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <Router>
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to our store!" />} />
      </Routes>
    </Router>
  );
}

export default App;

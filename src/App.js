import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import OrderForm from './components/OrderForm';
import NewsFeed from './components/NewsFeed';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/TechTrek-X" element={<ProductPage />} /> {/* Добавленный маршрут */}
            <Route path="/order" element={<OrderForm />} />
            <Route path="/news" element={<NewsFeed />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

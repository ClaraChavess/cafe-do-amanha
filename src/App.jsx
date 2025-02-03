import React from 'react';
import { BrowserRouter, Route, Routes, Router,Link } from 'react-router-dom';
import Header from './components/Header';
import Contato from './components/Contato';
import Footer from './components/Footer';
import História from './components/História';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import Pedidos from './components/Pedidos';
import SobreNós from './components/SobreNós';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className='App'>
      <Header/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
          <Route path='/historia' element={<História/>}></Route>
          <Route path='/sobre-nos' element={<SobreNós/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/pedidos' element={<Pedidos/>}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
          <Footer/>
   </div>
  )
};

export default App;
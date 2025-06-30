// Menu.js
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src='images/logo.png' alt="Logo"/>
      </div>
      <div className="links">
        <a href="#planos">Planos</a>
        <a href="#servicos">Serviços</a>
        <a href="#sobre-nos">Sobre nós</a>
        <a href="#contato">Contato</a>
      </div>
    </div>
  );
};

export default Menu;
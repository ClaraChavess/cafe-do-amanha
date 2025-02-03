import React from "react";
import { Link } from "react-router-dom";
import './Header.module.css'
import styles from './Header.module.css';

function Header(){
    return(
        <nav>
            <Link to="/" className={styles.tituloNav}>Café Tomorrow</Link>
            <ul>
                <Link to="/"><li>Início</li></Link>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/pedidos"><li>Pedidos</li></Link>
                <Link to="/historia"><li>História</li></Link>
                <Link to="/sobre-nos"><li>Sobre nós</li></Link>
                <Link to="/contato"><li>Contato</li></Link>
            </ul>   
        </nav>
    )
}

export default Header;
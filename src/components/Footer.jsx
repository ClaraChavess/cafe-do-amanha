import React from "react";
import styles from './Footer.module.css'
import './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.containerFooter}>
                <p>&copy; 2024 Café Tomorrow. Todos os direitos reservados.</p>
                <p>738 Av. Beira Mar, Fortaleza, CE | (85) 1234-5678</p>
            </div>
        </footer>
    )
}

export default Footer;
import React from 'react';
import './NotFound.module.css';
import styles from './NotFound.module.css'

function NotFound(){
    return(
        <div className={styles.notFound}>
            <h1>Página não encontrada</h1>
            <p>A página que você está procurando não existe.</p>
        </div>
    )
}

export default NotFound;
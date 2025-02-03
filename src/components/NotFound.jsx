import React from 'react';
import './NotFound.module.css';
import styles from './NotFound.module.css'

function NotFound(){
    return(
        <div className={styles.notFound}>
            <h1>Pagina nao encontrada</h1>
            <p>A pagina que voce esta procurando nao existe.</p>
        </div>
    )
}

export default NotFound;
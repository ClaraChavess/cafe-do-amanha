import './Home.module.css'
import styles from './Home.module.css';



function Home(){
    return(
        <section className={styles.imagem}>
             <div className={styles.containerHome}>
                <h2>Cada xícara conta uma história</h2>
                <p>Bem-vindo ao Café do Amanhã, onde o aroma do café se mistura com a brisa do mar.</p>
            </div>
        </section>
            
        )
    }

export default Home;
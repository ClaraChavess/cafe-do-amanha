import React from 'react';
import './SobreNós.module.css';
import styles from './SobreNós.module.css';
import ImageCarousel from './Carousel';

function SobreNós() {
    return(
        <section id="about" className={styles.aboutSection}>
            <div className={styles.containerSobre}>
                <h2>Sobre nós</h2>
                <p>
                   O Café do Amanhã foi fundado por Felipe e Clara. Tudo começou com a paixão por café e bons encontros. Sempre acreditamos que uma xícara bem preparada tem o poder de transformar momentos simples em lembranças especiais. Foi assim que nasceu o Café do Amanhã: um espaço acolhedor, feito para quem aprecia aromas, sabores e boas conversas.

                 Aqui, cada grão é escolhido com cuidado, cada xícara é preparada com carinho e cada cliente é recebido como um amigo. Mais do que uma cafeteria, queremos ser um refúgio do dia a dia, onde o café aquece não só as mãos, mas também o coração.

                 Seja bem-vindo e sinta-se em casa!
                </p>
                <ImageCarousel/>
                
            </div>
        </section>
    )
}

export default SobreNós;
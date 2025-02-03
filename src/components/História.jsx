import React from "react";
import './História.module.css';
import styles from './História.module.css';

function História(){
    return(
        <section className={styles.storiesSection}>
            <div className={styles.container}>
                <h1>Histórias</h1>
                <p>Descubra as histórias inspiradoras que fazem parte do Café do Amanhã. Viagens em lugares novos, um momento de paz ou simplesmente uma pausa da correria do cotidiano, venha celebrar a vida conosco e faça parte do nosso amanhã.</p>

                <div className={styles.storyList}>
                    <div className={styles.story}>
                        <h2>A Conversa de Sempre.</h2>
                        <p>
                         Tudo começou numa manhã qualquer, quando Felipe e Clara se encontraram na padaria da esquina, como faziam há anos. Ele, amante de um café bem forte, ela, apaixonada por cappuccinos cremosos. Entre goles e conversas, surgiu a pergunta: “E se houvesse um lugar onde cada xícara fosse um convite para um novo começo?” Um espaço onde as pessoas pudessem tomar seu café com calma, sem pressa, aproveitando o momento?
                        </p>
                    </div>
                    <div className={styles.story}>
                        <h2>O Café que Mudou Tudo.</h2>
                        <p>
                         Algumas semanas depois, em uma viagem inesperada a uma pequena cidade, Clara e Felipe entraram em uma cafeteria acolhedora, onde o aroma de café fresco e o calor das boas-vindas faziam qualquer um se sentir em casa. Ali, conversaram com o dono do lugar, que lhes contou que o café era mais do que uma bebida — era um ritual, uma pausa no dia, um momento de conexão. Quando saíram, olharam um para o outro e souberam: era aquilo que queriam criar. Um espaço onde cada xícara trouxesse um novo começo, onde cada manhã tivesse o sabor de possibilidades.
                        </p>
                    </div>
                    <div className={styles.story}>
                        <h2>O Primeiro Amanhã.</h2>
                        <p>
                         De volta à cidade, começaram a transformar o sonho em realidade. Escolheram um nome que traduzisse tudo o que acreditavam: Café do Amanhã — um lugar para recomeços, encontros e inspiração. Depois de meses testando receitas, escolhendo grãos e cuidando de cada detalhe, as portas se abriram. No primeiro dia, Clara e Felipe serviram o primeiro café com as mãos trêmulas de emoção. Mas quando o primeiro cliente sorriu ao dar o primeiro gole, souberam que tinham acertado. O Café do Amanhã não era só deles — era de todos que buscavam um instante de paz, um bom café e um amanhã melhor.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default História;
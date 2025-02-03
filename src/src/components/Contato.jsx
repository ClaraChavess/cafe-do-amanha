import styles from './Contato.module.css';

function Contato(){
    return(
        <section className={styles.contato}>
            <div className={styles.infoContato}>
            <h2 className={styles.tituloCont}>Contato</h2>
            <p>Estamos ansiosos para ouvir você! Entre em contato conosco através dos detalhes abaixo ou envie-nos uma<br></br> mensagem  diretamente pelo formulário.</p>
            
            <div className={styles.endereco}>
                <p><strong>Endereço:</strong> 738 Av. Beira Mar, Fortaleza, CE</p>
                <p><strong>Telefone:</strong> (85) 1234-5678</p>
                <p><strong>Email:</strong> contato@cafedoamanha.com</p>
            </div>
            <form className="formContato">
                <div className={styles.form}>
                    <label htmlFor="nome">Nome:</label><br></br>
                    <input type="text" id='nome' name='nome' required/>
                </div>
                <div className={styles.form}>
                    <label htmlFor="email">Email:</label><br></br>
                    <input type="email" id='email' name='email' required/>
                </div>
                <div className={styles.form}>
                    <label htmlFor="email">Mensagem:</label><br></br>
                    <textarea name="mensagem" id="mensagem" rows="5"></textarea>
                </div> 
                <button type="submit">Enviar Mensagem</button>     
                </form>
            </div>
      </section>
    )

}

export default Contato;
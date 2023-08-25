import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section className='redesSociais'>

                <img src='/imagens/fb.png' alt='Logotipo do Facebook'></img>
                <img src='/imagens/tw.png' alt='Logotipo do Twitter'></img>
                <img src='/imagens/ig.png' alt='Logotipo do Instagram'></img>

            </section>
            <section>
                <img src='/imagens/logo.png' alt='Logotipo da Organo'></img>
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>

        </footer>
    )
}

export default Footer
import './Banner.css'

export const Banner = () => {
    //JSX
    //No react isso parece html mas não como podemos observar o class de html no javaScript é classe para poder usar class para minipular o HTML no CSS usamos className
    return (
        <header className='banner'>
            <img src='/imagens/banner.png' alt='O banner principal da página do Organo'></img>
        </header>
    )
}

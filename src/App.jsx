//Import dos hooks do react
import { useState } from 'react'
//Import do css
import s from './App.module.css'
//Import dos componentes internos
import { Card } from './components/card'
//Import de midia
import cardImg1 from '/card1.jpg'
import cardImg2 from '/card2.jpg'
import cardImg3 from '/card3.jpg'
import pic from '/pic.png'
import vvv from '/video.mp4'
import lg from '/logo.png'

function App() {
    const [nome, setNome] = useState("")
    const [assunto, setAssunto] = useState("")

    const enviar = () => {
        const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
    
        const msg =encodeURIComponent(mensagem)
        window.open(`https://wa.me/5541********?text=${msg}`)
    };
        
  return (
    <>
      <nav>
        <a href="#s1">primeira</a>
        <a href="#s2">segunda</a>
        <a href="#s3">terceira</a>
        <a href="#s4">quarta</a>
    </nav>
    <main>
        <section id="s1" className={s.s1}>
            <div className={s.imgSide}>
                <img src={pic} alt=""/>
            </div>
            <div className={s.textSide}>
                <h1>Teste</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic mollitia odio ipsa. Porro aut tempore ratione, corporis incidunt molestias voluptatibus quisquam fuga ad expedita inventore repellendus quas, ipsum, quam sunt?</p>
            </div>
        </section>

        <section id="s2" className={s.s2}>
            <Card 
            imgSrc={cardImg1} 
            alt="Card img 1" 
            title="Card1" 
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt modi libero dolorum ipsum eaque at aut totam magni quia autem quasi itaque accusantium, reiciendis natus corrupti non facilis aperiam sequi?" 
            />
            <Card 
            imgSrc={cardImg2} 
            alt="Card img 2" 
            title="Card2" 
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt modi libero dolorum ipsum eaque at aut totam magni quia autem quasi itaque accusantium, reiciendis natus corrupti non facilis aperiam sequi?" 
            />
            <Card 
            imgSrc={cardImg3} 
            alt="Card img 3" 
            title="Card3" 
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt modi libero dolorum ipsum eaque at aut totam magni quia autem quasi itaque accusantium, reiciendis natus corrupti non facilis aperiam sequi?" 
            />    
        </section>

        <section id="s3" className={s.s3}>
            <div className={s.fullScreen}>
                <video src={vvv} autoPlay muted loop></video>
                <div className={s.contentVideo}>
                    <img src={lg} alt=""/>
                    <a href="https://bethesda.net/pt/game/starfield" target="_blank">Play Now</a> 
                </div>
            </div>
        </section>

        <section id="s4" className={s.s4}>
            <h2>Contato</h2>
            <div className={s.formulario}>
                <label htmlFor="nome">Nome</label>
                <input 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}
                type="text" 
                id="nome" 
                placeholder="Insira seu nome"/>

                <label htmlFor="assunto">Mensagem</label>

                <textarea 
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                id="assunto" 
                placeholder="Insira sua mensagem"></textarea>
                <button className={s.btn} onClick={enviar}>ENVIAR</button>
            </div>
        </section>

    </main>

    <footer>
        <a href="https://www.facebook.com" target="_blank"><i className={"fa-brands fa-facebook"}></i></a>
        <a href="https://www.instagram.com" target="_blank"><i className={"fa-brands fa-instagram"}></i></a>
        <a href="https://www.linkedin.com" target="_blank"><i className={"fa-brands fa-linkedin"}></i></a>
        <a href="https://www.github.com" target="_blank"><i className={"fa-brands fa-github"}></i></a>
    </footer>
    </>
  )
}

export default App

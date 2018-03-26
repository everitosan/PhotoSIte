import React from 'react'
import Modal from '../Modal/Modal'
import './About.css'

const About = (props) => {
  return (
    <Modal>
      <section className="About">
        <article>
          <h2>
            “Las mejores historias se cuentan con sentimiento,  detalles, luces, sombras  y color.”
          </h2>
          <p>Amo la fotografía por la estética, pero sobre todo porque me deja  
            <span className="accent"> compartir </span>
            las exquisitas 
            <span className="accent"> ideas </span> 
            y los profundos 
            <span className="accent"> sentimientos </span>
            que me provoca encontrar un mundo maravilloso. Un mundo rodeado de sabores, texturas, colores, luces y sombras esperando ser expuestas a través de la
            <span className="accent"> cámara </span>.
            </p>
          <p>Es por eso que en cada toma 
            <span className="accent"> capturo </span>
            y replico a los espectadores de la fotografía todas esas
            <span className="accent"> sensaciones </span>
            que provocan una escena.</p>
          <p className="author" >  <br/> Everardo Sánchez Hernández <br/> <br/> Fotógrafo </p>
        </article>
      </section>
    </Modal>
  )
}

export default About
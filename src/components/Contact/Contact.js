import React, {Component} from 'react'
import Modal from '../Modal/Modal'
import './Contact.css'

import evesanPhoto from '../../img/evesan@2x.png'

class Contact extends Component {
  render () {
    return (
      <Modal hide={this.props.hide} >
        <section className="Contact" >
          <article className="column evesanInfo">
            <img alt="evesan" src={evesanPhoto} />

            <div className="conactInfoRow" >
              <span className="icon-placeholder"></span>
              Mexico City
            </div>

            <div className="conactInfoRow" >
              <span className="icon-smartphone-call"></span>
              (044) 55 40 12 88 69
            </div>


            <div className="conactInfoRow" >
              <span className="icon-email"></span>
              photo@evesan.rocks
            </div>

            <div className="conactInfoRow" >
              <span className="icon-instagram"></span>
              instagram.com/everitosan
            </div>


          </article>
          <article className="column">
            <h2 className="title"> Trabajemos juntos! </h2>
            <p>
              Ingresa tus datos y pongamos manos a la obra.
            </p>
            <form>
              <input type="text" required placeholder="Nombre" />
              <input type="email" required placeholder="Email" />
              <input type="text" required placeholder="Mensaje" />
              <div className="buttons">
                <input type="submit" value="Contactar" />
              </div>
            </form>
          </article>
        </section>
      </Modal>
    )
  }
}

export default Contact
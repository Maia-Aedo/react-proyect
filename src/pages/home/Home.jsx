// import css
import './Home.css'
import banner from '../../assets/yoga_banner.png'
import { Aside } from '../../components/aside/Aside'

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="container-main">
          <div className="banner">
            <p><img src={banner} alt="" height={450} width={1100} /></p>
          </div>
          <div className="separador">
            <h2 className='title'>¿Por qué hacer yoga?</h2>
            <div className="text-pq">
              <p className="left-text">El yoga no solo tiene beneficios físicos, sino que también es altamente beneficioso para la mente y el cuerpo.
                Esta disciplina dejó de ser exclusivamente una práctica espiritual de la religión hinduista para
                convertirse en una actividad demandada por aquellos que buscan mejorar su salud mental. El creciente enfoque en el bienestar
                mental llevó a un aumento en la popularidad del yoga.</p>
              <p className="right-text">El yoga también se considera a veces como "un estilo de vida", ya que promueve la salud y el
                fortalecimiento del cuerpo, la mente y el espíritu a través del trabajo de la respiración, la meditación y las asanas.
                Es importante destacar que el yoga puede adaptarse a las necesidades de cada persona.</p>
            </div>
          </div>
        </div>
        <Aside />
      </div>

    </>
  )
}


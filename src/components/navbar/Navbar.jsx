// import css
import { Link } from "react-router-dom";
import './Navbar.css'
// en caso de usar variables siempre afuera de const

export const Navbar = () => {
  return (
    // dentro de etiquetas vacias (fragment) para evitar usar muchos divs
    // las variables js van dentro de {}
    <>
      <header>
        <div className="container-nav">
          <nav>
            <ul className='nav menu'>
              <li id='item'>
                <Link to="/inicio" >Home</Link>
              </li>
              <li id='item'>
                <Link to="/estado">Estado</Link>
              </li>
              <li id='item'>
                <Link to="/portafolio">Portafolio</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

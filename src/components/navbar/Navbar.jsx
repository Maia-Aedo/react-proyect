// import css
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Navbar.css'
// en caso de usar variables siempre afuera de const

/* importacion de las paginas */
import Home from "./pages/home/Home";
import State from "./pages/state/State";
import Portfolio from "./pages/portfolio/Portfolio"

export const Navbar = () => {
  return (
    // dentro de etiquetas vacias (fragment) para evitar usar muchos divs
    // las variables js van dentro de {}
    <>
      <Router>
        <header>
          <div className="container-nav">
            <nav>
              <ul className='nav menu'>
                <li id='item'>
                  <Link to="/" >Home</Link>
                </li>
                <li id='item'>
                  <Link to="/State">Estado</Link>
                </li>
                <li id='item'>
                  <Link to="/Portfolio">Portafolio</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/Estado'>
            <State />
          </Route>
          <Route path='/Portafolio'>
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

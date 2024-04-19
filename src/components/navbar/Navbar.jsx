// import css
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
              <li id='item'>Principal</li>
              <li id='item'>Aside</li>
              <li id='item'>Footer</li>
            </ul>
          </nav>
        </div>

      </header>
    </>
  )
}

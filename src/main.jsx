// importacion de estilos
import './index.css'
// IMPORTACION DE COMPONENTES
import React from 'react'
import ReactDOM from 'react-dom/client'
// entre llaves por ser funcion const
import { Navbar } from './components/navbar/Navbar'
import { Principal } from './pages/home/Home'
import { Aside } from './components/aside/Aside'
import { Footer } from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import Counter from './components/counter/Counter'
import { Profile } from './components/profile/Profile'
import State from './pages/state/State'

// RUTAS


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <div className="container">
        <Principal />
        <Aside />
      </div>
      <Footer />
    </React.StrictMode>,
  </BrowserRouter>

)

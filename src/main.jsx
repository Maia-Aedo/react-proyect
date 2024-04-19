// importacion de estilos
import './index.css'
// IMPORTACION DE COMPONENTES
import React from 'react'
import ReactDOM from 'react-dom/client'
// entre llaves
import { Navbar } from './components/navbar/Navbar'
import { Principal } from './components/main/Principal'
import { Aside } from './components/aside/Aside'
import { Footer } from './components/footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <Principal />
      <Aside />
    </div>
    <Footer />
  </React.StrictMode>,
)

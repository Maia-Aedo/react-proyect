// importacion de estilos
import './index.css'
// IMPORTACION DE COMPONENTES
import React from 'react'
import ReactDOM from 'react-dom/client'
// entre llaves por ser funcion const
import App from './App';
import { Footer } from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router>
      {/* <Navbar />
      <div className="container">
        <Home />
        <Aside />
      </div>
      <Footer /> */}
      <App />
      <Footer/>
      </Router>
    </React.StrictMode>,

)

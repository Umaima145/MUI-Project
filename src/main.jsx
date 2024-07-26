import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Section1 from './Components/Section1.jsx'
import MissionVisionSection from './Components/MissionVisionSection.jsx'
import SirAli from './Components/SirAli.jsx'
import Sessions from './Components/Sessions.jsx'
import Form from './Components/Form.jsx'
import Footer from './Components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 
   <>
    <App />
    <Section1/>
    <MissionVisionSection/>
    <SirAli/>
    <Sessions/>
    <Form/>
    <Footer/>
    </>
  
)

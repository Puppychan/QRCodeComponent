import "./App.css"
import { useState } from 'react'
import QrImage from '../images/image-qr-code.png'
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="App">
      <div className="card">
        <img src={QrImage} alt="QrImage" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
      <Footer/>
    </div>
  )
}

export default App

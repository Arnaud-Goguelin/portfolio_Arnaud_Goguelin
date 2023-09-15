import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import LandingPage from './pages/landingPage/landingPage'
// import Footer from './components/footer/footer'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className='globalStyle'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {/* <Route path='/Profil' element={<TODO />} />
          <Route path='/Projets' element={<TODO />} />
          <Route path='/Projets/:id' element={<TODO />} />
          <Route path='/Objectifs' element={<TODO />} />
          <Route path='/Contact' element={<TODO />} />
          <Route path='/*' element={<TODO />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
)

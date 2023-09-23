import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import LandingPage from './pages/landingPage/landingPage'
import ProfilPage from './pages/profilPage/profilPage'
import ProjectsGalleryPage from './pages/projectsGalleryPage/projectsGalleryPage'
import OneProjectPage from './pages/oneProjectPage/oneProjectPage'
// import Footer from './components/footer/footer'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='noiseBackground'>
        <Header />
        <main className='globalStyle'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Profil' element={<ProfilPage />} />
            <Route path='/Projets' element={<ProjectsGalleryPage />} />
            <Route path='/Projets/:id' element={<OneProjectPage />} />
            {/* <Route path='/Objectifs' element={<TODO />} /> */}
            {/* <Route path='/Contact' element={<TODO />} /> */}
            {/* <Route path='/*' element={<TODO />} /> */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  </React.StrictMode>,
)
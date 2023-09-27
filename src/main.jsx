import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { appRoutes } from './utils/constants';

import Header from './components/header/header'
import LandingPage from './pages/landingPage/landingPage'
import ProfilPage from './pages/profilPage/profilPage'
import ProjectsGalleryPage from './pages/projectsGalleryPage/projectsGalleryPage'
import OneProjectPage from './pages/oneProjectPage/oneProjectPage'
import ObjectivesPage from './pages/objectivesPage/objectivesPage'
import ContactPage from './pages/contactPage/contactPage'
import Error from './pages/error/error';
// import Footer from './components/footer/footer'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='noiseBackground'>
        <Header />
        <main className='globalStyle'>
          <Routes>
            <Route path={appRoutes.landing} element={<LandingPage />} />
            <Route path={appRoutes.profil} element={<ProfilPage />} />
            <Route path={appRoutes.projects} element={<ProjectsGalleryPage />} />
            <Route path={appRoutes.oneProject} element={<OneProjectPage />} />
            <Route path={appRoutes.objectives} element={<ObjectivesPage />} />
            <Route path={appRoutes.contact} element={<ContactPage />} />
            <Route path={appRoutes.error} element={<Error />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  </React.StrictMode>,
)
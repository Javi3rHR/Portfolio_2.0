import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import LanguageToggle from './components/LanguageToggle'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gray-100">
        <LanguageToggle />
        <Header />
        <main className="container mx-auto px-4 py-12">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  )
}

export default App
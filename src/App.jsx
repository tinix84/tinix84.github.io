import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Calculators from './components/Calculators'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const pages = { about: About, resume: Resume, projects: Projects, calculators: Calculators, blog: Blog, contact: Contact }

export default function App() {
  const [activePage, setActivePage] = useState('about')
  const PageComponent = pages[activePage]

  const navigate = useCallback((page) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Nav activePage={activePage} onNavigate={navigate} />
      <div className="site-wrapper">
        <Hero />
        <AnimatePresence mode="wait">
          <PageComponent key={activePage} />
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

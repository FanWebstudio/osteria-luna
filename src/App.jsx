import { Suspense, lazy } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LoadingSpinner from './components/LoadingSpinner'
import SkipLink from './components/SkipLink'
import SEO from './components/SEO'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import { useSmoothScroll } from './hooks/useSmoothScroll'

// Lazy load components
const About = lazy(() => import('./components/About').then(module => ({ default: module.default })))
const Menu = lazy(() => import('./components/Menu/Menu').then(module => ({ default: module.default })))
const TastingMenu = lazy(() => import('./components/TastingMenu').then(module => ({ default: module.default })))
const WineList = lazy(() => import('./components/WineList').then(module => ({ default: module.default })))
const PrivateEvents = lazy(() => import('./components/PrivateEvents').then(module => ({ default: module.default })))
const Gallery = lazy(() => import('./components/Gallery').then(module => ({ default: module.default })))
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.default })))

function App() {
  useSmoothScroll();

  return (
    <>
      <SEO />
      <SkipLink />
      <Navigation />
      <main id="main-content" tabIndex="-1">
        <h1 className="sr-only">Osteria Luna - Fine Italian Dining</h1>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Menu />
          <TastingMenu />
          <WineList />
          <PrivateEvents />
          <Gallery />
          <Contact />
        </Suspense>
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}

export default App

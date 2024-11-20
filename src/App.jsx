import { Suspense, lazy } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { LoadingSpinner } from './components/LoadingSpinner'
import { SkipLink } from './components/SkipLink'
import { SEO } from './components/SEO'

// Lazy load other components
const About = lazy(() => import('./components/About'))
const Menu = lazy(() => import('./components/Menu/Menu'))
const TastingMenu = lazy(() => import('./components/TastingMenu'))
const WineList = lazy(() => import('./components/WineList'))
const PrivateEvents = lazy(() => import('./components/PrivateEvents'))
const Gallery = lazy(() => import('./components/Gallery'))
const Press = lazy(() => import('./components/Press'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
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
          <Press />
          <Contact />
        </Suspense>
      </main>
      <footer role="contentinfo" className="bg-rich-black text-cream py-8">
        <div className="container-custom">
          <p className="text-center"> {new Date().getFullYear()} Osteria Luna. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App

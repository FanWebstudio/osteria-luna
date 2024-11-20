import { Suspense, lazy } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { LoadingSpinner } from './components/LoadingSpinner'
import { SkipLink } from './components/SkipLink'
import { SEO } from './components/SEO'
import { BackToTop } from './components/BackToTop'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Footer from './components/Footer';

// Lazy load other components
const About = lazy(() => import('./components/About'))
const Menu = lazy(() => import('./components/Menu/Menu'))
const TastingMenu = lazy(() => import('./components/TastingMenu'))
const WineList = lazy(() => import('./components/WineList'))
const PrivateEvents = lazy(() => import('./components/PrivateEvents'))
const Gallery = lazy(() => import('./components/Gallery'))
const Contact = lazy(() => import('./components/Contact'))

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
          <Footer />
        </Suspense>
      </main>
      <BackToTop />
    </>
  )
}

export default App

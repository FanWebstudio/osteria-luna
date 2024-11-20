import { Suspense, lazy } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { LoadingSpinner } from './components/LoadingSpinner'
import { SkipLink } from './components/SkipLink'
import { SEO } from './components/SEO'
import { BackToTop } from './components/BackToTop'
import { useSmoothScroll } from './hooks/useSmoothScroll'

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
          <Press />
          <Contact />
        </Suspense>
      </main>
      <footer role="contentinfo" className="bg-rich-black text-cream py-12 border-t border-gold/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-accent text-xl mb-4">Hours</h3>
              <p className="text-cream/70">Tuesday - Sunday</p>
              <p className="text-cream/70">5:00 PM - 10:00 PM</p>
            </div>
            <div>
              <h3 className="font-accent text-xl mb-4">Location</h3>
              <p className="text-cream/70">123 Main Street</p>
              <p className="text-cream/70">San Francisco, CA 94105</p>
            </div>
            <div>
              <h3 className="font-accent text-xl mb-4">Contact</h3>
              <p className="text-cream/70">+1 (415) 555-0123</p>
              <p className="text-cream/70">info@osterialuna.com</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gold/10">
            <p className="text-cream/50"> {new Date().getFullYear()} Osteria Luna. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  )
}

export default App

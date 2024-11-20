import { Suspense, lazy } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { LoadingSpinner } from './components/LoadingSpinner'

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
      <Navigation />
      <main>
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
    </>
  )
}

export default App

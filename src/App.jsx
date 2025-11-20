import { useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Activities from './components/Activities'
import Sermons from './components/Sermons'
import LifeGroups from './components/LifeGroups'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import LifeGroupsPage from './pages/LifeGroupsPage'
import GalleryPage from './pages/GalleryPage'
import PrayerPage from './pages/PrayerPage'

function Home() {
  const refs = {
    about: useRef(null),
    events: useRef(null),
    sermons: useRef(null),
    groups: useRef(null),
    visit: useRef(null),
  }
  const onScrollTo = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-black text-white">
      <Navbar onScrollTo={onScrollTo} />
      <Hero onScrollTo={onScrollTo} />
      <div ref={refs.about}><Intro /></div>
      <div ref={refs.events}><Activities /></div>
      <div ref={refs.sermons}><Sermons /></div>
      <div ref={refs.groups}><LifeGroups compact /></div>
      <Gallery />
      <div ref={refs.visit}><Contact /></div>
      <footer className="bg-black text-white/60 py-10 text-center text-sm">© {new Date().getFullYear()} Radiant Hope Church • All rights reserved</footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/life-groups" element={<LifeGroupsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/prayer" element={<PrayerPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function NotFound(){
  return (
    <div className="min-h-screen grid place-items-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Page Not Found</h1>
        <Link to="/" className="mt-4 inline-block rounded-full bg-white text-black px-6 py-3 text-sm font-semibold">Go Home</Link>
      </div>
    </div>
  )
}

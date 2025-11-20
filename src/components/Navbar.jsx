import { Link } from 'react-router-dom'

export default function Navbar({ onScrollTo }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/70 text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight text-xl">RHC</Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <button onClick={() => onScrollTo('about')} className="hover:text-white/80">About</button>
          <button onClick={() => onScrollTo('events')} className="hover:text-white/80">Events</button>
          <button onClick={() => onScrollTo('sermons')} className="hover:text-white/80">Sermons</button>
          <Link to="/life-groups" className="hover:text-white/80">Life Groups</Link>
          <Link to="/gallery" className="hover:text-white/80">Gallery</Link>
          <Link to="/prayer" className="hover:text-white/80">Prayer</Link>
        </nav>
        <Link to="/" className="rounded-full bg-white text-black px-4 py-2 text-xs font-semibold">Plan a Visit</Link>
      </div>
    </header>
  )
}

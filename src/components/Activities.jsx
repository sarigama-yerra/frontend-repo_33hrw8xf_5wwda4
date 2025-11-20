import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Activities() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(`${API}/api/events`).then(r => r.json()).then(setEvents).catch(() => setEvents([]))
  }, [])

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Whats happening</h2>
          <span className="text-white/60 text-sm">Past & upcoming</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length === 0 && [
            {
              title: 'City Outreach',
              description: 'Serving our neighbors with meals and prayer.',
              date: new Date().toISOString(),
              image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
              category: 'Outreach'
            },
            {
              title: 'Youth Night',
              description: 'Games, worship, and a message that speaks to real life.',
              date: new Date(Date.now()+86400000).toISOString(),
              image_url: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1600&auto=format&fit=crop',
              category: 'Youth'
            },
            {
              title: 'Worship Night',
              description: 'An evening of praise, prayer, and community.',
              date: new Date(Date.now()+3*86400000).toISOString(),
              image_url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
              category: 'Worship'
            }
          ].map((e,i)=> <Card key={i} item={e} />)}

          {events.map((e) => (
            <Card key={e._id} item={e} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ item }) {
  const d = new Date(item.date)
  return (
    <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg">
      <div className="h-44 overflow-hidden">
        <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <div className="text-xs uppercase tracking-wide text-black/60">{item.category}</div>
        <h3 className="mt-1 font-bold text-lg">{item.title}</h3>
        <p className="mt-2 text-black/70 text-sm">{item.description}</p>
        <div className="mt-4 text-sm font-medium">{d.toLocaleDateString()} • {d.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}</div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Gallery({ title = 'Moments', showHeader = true }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${API}/api/gallery`).then(r=>r.json()).then(setItems).catch(()=>setItems([]))
  }, [])

  const data = items.length ? items : sample()

  return (
    <section className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {showHeader && (
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
            <p className="mt-2 text-black/70">Joyful faces, community moments, worship highlights.</p>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {data.map((m, i) => (
            <figure key={m._id || i} className="overflow-hidden rounded-2xl shadow-md">
              {m.media_type === 'video' ? (
                <video className="w-full h-full" controls src={m.url} />
              ) : (
                <img className="w-full h-44 object-cover" src={m.url} alt={m.title} />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function sample() {
  return [
    { title: 'Worship', media_type: 'photo', url: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Community', media_type: 'photo', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Prayer', media_type: 'photo', url: 'https://images.unsplash.com/photo-1523661149972-0becaca2016e?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Youth', media_type: 'photo', url: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Serving', media_type: 'photo', url: 'https://images.unsplash.com/photo-1523246198197-90449856d95e?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Hope', media_type: 'photo', url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop' },
  ]
}

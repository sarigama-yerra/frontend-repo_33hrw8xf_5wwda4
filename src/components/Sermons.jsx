import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Sermons() {
  const [sermons, setSermons] = useState([])

  useEffect(() => {
    fetch(`${API}/api/sermons`).then(r => r.json()).then(setSermons).catch(()=>setSermons([]))
  }, [])

  return (
    <section className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Sermon Archive</h2>
        <p className="mt-2 text-black/70">Catch up on messages organized by series, speaker, or date.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {(sermons.length ? sermons : sample()).map((s, i) => (
            <SermonCard key={s._id || i} s={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SermonCard({ s }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-black/5">
      <div className="aspect-video bg-black/5 flex items-center justify-center text-black/40">
        {s.video_url ? (
          <iframe className="w-full h-full" src={s.video_url} title={s.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        ) : (
          <div className="p-6">Video coming soon</div>
        )}
      </div>
      <div className="p-5">
        <div className="text-xs uppercase tracking-wide text-black/60">{s.series || 'Message'}</div>
        <h3 className="mt-1 font-bold text-lg">{s.title}</h3>
        <div className="text-sm text-black/70">{s.speaker} • {new Date(s.date || Date.now()).toLocaleDateString()}</div>
        {s.audio_url && (
          <audio controls className="mt-3 w-full">
            <source src={s.audio_url} />
          </audio>
        )}
        {s.notes && <p className="mt-3 text-sm text-black/80">{s.notes}</p>}
      </div>
    </div>
  )
}

function sample() {
  return [
    {
      title: 'Hope in the Storm',
      speaker: 'Ps. Jordan Lee',
      series: 'Anchored',
      date: new Date().toISOString(),
      video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      audio_url: '',
      notes: 'Key scripture: Mark 4:35-41'
    },
    {
      title: 'Made New',
      speaker: 'Ps. Aria Gomez',
      series: 'Renewed',
      date: new Date(Date.now()-86400000).toISOString(),
      video_url: '',
      audio_url: '',
      notes: 'Key scripture: 2 Corinthians 5:17'
    }
  ]
}

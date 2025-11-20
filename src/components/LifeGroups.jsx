import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function LifeGroups({ compact = false }) {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch(`${API}/api/life-groups`).then(r => r.json()).then(setGroups).catch(()=>setGroups([]))
  }, [])

  const items = groups.length ? groups : sample()

  return (
    <section className={compact ? "bg-black text-white" : "bg-black text-white"}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {!compact && (
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight">Life Groups</h2>
            <p className="mt-2 text-white/70">Find your people. Grow in faith together.</p>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((g, i) => (
            <div key={g._id || i} className="bg-white text-black rounded-2xl p-5 shadow-lg">
              <div className="text-xs uppercase tracking-wide text-black/60">{g.meeting_day} • {g.meeting_time}</div>
              <h3 className="mt-1 font-bold text-lg">{g.name}</h3>
              <div className="text-sm text-black/70">Leader: {g.leader}</div>
              <p className="mt-2 text-sm text-black/80">{g.description}</p>
              <button className="mt-4 w-full rounded-xl bg-black text-white py-2 text-sm font-semibold">Sign Up</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function sample() {
  return [
    { name: 'Young Adults', leader: 'Sam & Riley', meeting_day: 'Tuesday', meeting_time: '7:00 PM', location: 'Downtown', description: 'Community, Scripture, and coffee.' },
    { name: 'Families', leader: 'Lee Family', meeting_day: 'Thursday', meeting_time: '6:30 PM', location: 'Eastside', description: 'Kids welcome! Dinner + discussion.' },
    { name: 'Prayer & Worship', leader: 'Maya', meeting_day: 'Friday', meeting_time: '7:30 PM', location: 'Westside', description: 'Seeking Gods presence together.' },
  ]
}

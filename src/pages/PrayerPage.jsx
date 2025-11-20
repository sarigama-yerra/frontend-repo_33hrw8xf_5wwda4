import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function PrayerPage(){
  const [requests, setRequests] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetch(`${API}/api/prayers`).then(r=>r.json()).then(setRequests).catch(()=>setRequests([]))
  }, [])

  async function submit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.is_public = !!payload.is_public
    const res = await fetch(`${API}/api/prayers`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    setStatus(res.ok ? 'Thanks for sharing. We are praying with you.' : 'Something went wrong.')
    if (res.ok) {
      const updated = await fetch(`${API}/api/prayers`).then(r=>r.json()).catch(()=>requests)
      setRequests(updated)
      e.currentTarget.reset()
    }
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Prayer</h1>
          <p className="mt-3 text-black/70 max-w-2xl">Share a request or read encouraging Scripture. God hears and God cares.</p>
          <form onSubmit={submit} className="mt-6 space-y-3">
            <input name="name" placeholder="Your name (optional)" className="w-full rounded-xl bg-black/5 px-4 py-3" />
            <input name="email" type="email" placeholder="Email (optional)" className="w-full rounded-xl bg-black/5 px-4 py-3" />
            <textarea name="request" required placeholder="How can we pray with you?" className="w-full rounded-xl bg-black/5 px-4 py-3 h-32" />
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="is_public" /> Make my request public</label>
            <button className="rounded-xl bg-black text-white px-6 py-3 font-semibold">Submit</button>
            {status && <div className="text-sm">{status}</div>}
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Public Requests</h2>
          <ul className="mt-4 space-y-3">
            {(requests.length ? requests : sample()).map((r, i) => (
              <li key={r._id || i} className="rounded-2xl p-4 bg-black/5">
                <div className="text-sm text-black/60">{r.name || 'Anonymous'} • {new Date(r.created_at || Date.now()).toLocaleDateString()}</div>
                <p className="mt-1">{r.request}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 p-4 rounded-2xl bg-black text-white">
            <div className="font-semibold">Encouraging Scripture</div>
            <p className="mt-2 text-white/90">"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function sample(){
  return [
    { name: 'A friend', request: 'Please pray for peace and direction this week.', is_public: true },
    { name: 'Anon', request: 'Healing for my grandmother.', is_public: true },
  ]
}

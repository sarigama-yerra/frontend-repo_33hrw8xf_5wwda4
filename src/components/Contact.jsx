import { useState } from 'react'

const API = (import.meta.env.VITE_BACKEND_URL && import.meta.env.VITE_BACKEND_URL.replace(/\/$/, '')) || (typeof window !== 'undefined' ? window.location.origin.replace(':3000', ':8000') : '')

export default function Contact() {
  const [status, setStatus] = useState('')

  async function submit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      setStatus(res.ok ? "Thanks! We'll be in touch." : 'Something went wrong.')
    } catch (err) {
      setStatus('Unable to reach server.')
    }
    e.currentTarget.reset()
  }

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Contact Us</h2>
            <p className="mt-2 text-white/70">We'd love to hear from you.</p>

            <form onSubmit={submit} className="mt-6 space-y-3">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white text-black px-4 py-3" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white text-black px-4 py-3" />
              <textarea name="message" required placeholder="Message" className="w-full rounded-xl bg-white text-black px-4 py-3 h-32" />
              <button className="rounded-xl bg-white text-black px-6 py-3 font-semibold">Send</button>
              {status && <div className="text-sm text-white/80">{status}</div>}
            </form>

            <div className="mt-8 text-sm text-white/80 space-y-2">
              <div>123 Hope Ave, Your City</div>
              <div>Sundays: 9:30 AM & 11:15 AM • Wednesdays: 7:00 PM</div>
              <div className="flex gap-4 mt-2">
                <a href="#" className="underline">Instagram</a>
                <a href="#" className="underline">Facebook</a>
                <a href="#" className="underline">YouTube</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl min-h-[320px] bg-white">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194003300507!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1610000000000"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

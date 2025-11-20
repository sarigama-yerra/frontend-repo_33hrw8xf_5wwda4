import { motion } from 'framer-motion'

export default function Hero({ onScrollTo }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop"
          alt="Worship and fellowship"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Radiant Hope Church
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg sm:text-2xl text-white/90 max-w-2xl"
        >
          "Loved by God, Loving our City"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 grid gap-3 sm:flex sm:items-center"
        >
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur border border-white/20">Sundays • 9:30 AM & 11:15 AM</span>
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur border border-white/20">Wednesdays • 7:00 PM Youth</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex gap-3"
        >
          <button onClick={() => onScrollTo('visit')} className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition">Plan a Visit</button>
          <button onClick={() => onScrollTo('groups')} className="rounded-full bg-transparent border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">Join a Life Group</button>
        </motion.div>
      </div>
    </section>
  )
}

export default function Intro() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">A church for the next generation</h2>
            <p className="mt-4 text-black/70 leading-relaxed">
              We are a community of ordinary people following Jesus together — learning, serving, and loving our city. Our mission is simple: encounter God, embrace people, and empower purpose. Whether you're exploring faith or looking for a home church, there's a place for you here.
            </p>
            <ul className="mt-6 space-y-2 text-black/80">
              <li>• Jesus-centered teaching and worship</li>
              <li>• Safe, fun, and life-giving for youth and kids</li>
              <li>• Compassion that reaches beyond our walls</li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
              alt="Community and worship"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  )
}

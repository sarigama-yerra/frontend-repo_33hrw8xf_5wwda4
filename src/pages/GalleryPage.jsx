import Gallery from '../components/Gallery'

export default function GalleryPage(){
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Gallery</h1>
        <p className="mt-3 text-black/70 max-w-2xl">Browse albums from services, missions, and events.</p>
      </div>
      <Gallery title="All Albums" />
    </div>
  )
}

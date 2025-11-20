import LifeGroups from '../components/LifeGroups'

export default function LifeGroupsPage(){
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Life Groups</h1>
        <p className="mt-3 text-white/80 max-w-2xl">Life is better together. Discover groups by day and location, find your fit, and sign up to get connected.</p>
      </div>
      <LifeGroups />
    </div>
  )
}

import { DATA } from '../data'

export default function Header() {
  const firstName = DATA.name.split(' ')[0]
  return (
    <header className="flex items-center justify-between gap-6">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Hi, I&apos;m {firstName} <span>👋</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">{DATA.description}</p>
      </div>
      <img
        src={DATA.avatarUrl}
        alt={DATA.name}
        className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover border border-white/10"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
    </header>
  )
}

import { DATA } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="card">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DATA.projects.map((p) => (
          <a key={p.title} href={p.href || '#'} target="_blank" rel="noreferrer"
             className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <span className="text-xs text-gray-400">{p.dates}</span>
            </div>
            <p className="mt-2 text-gray-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(p.technologies || []).map((t: string) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

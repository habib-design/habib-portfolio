import { DATA } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="card">
      <h2 className="section-title">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((s) => (
          <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}

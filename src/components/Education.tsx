import { DATA } from '../data'

export default function Education() {
  return (
    <section id="education" className="card">
      <h2 className="section-title">Education</h2>
      <div className="space-y-5">
        {DATA.education.map((e) => (
          <div key={e.school} className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{e.school}</h3>
                <p className="text-sm text-gray-400">{e.degree}</p>
              </div>
              <div className="text-sm text-gray-400">{e.end}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { DATA } from '../data'

export default function Work() {
  return (
    <section id="work" className="card">
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-5">
        {DATA.work.map((job) => (
          <div key={job.company} className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">{job.company}</h3>
                <p className="text-sm text-gray-400">{job.title}</p>
              </div>
              <div className="text-sm text-gray-400 whitespace-nowrap">
                {job.start} – {job.end}
              </div>
            </div>
            <p className="mt-3 text-gray-300">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

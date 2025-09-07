import { DATA } from '../data'

export default function About() {
  return (
    <section id="about" className="card">
      <h2 className="section-title">About</h2>
      <p className="text-gray-300 leading-relaxed">
        {DATA.summary}
      </p>
    </section>
  )
}

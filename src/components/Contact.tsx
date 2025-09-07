import { DATA } from '../data'

export default function Contact() {
  const { email, tel, social } = DATA.contact
  return (
    <section id="contact" className="card">
      <h2 className="section-title">Contact</h2>
      <div className="space-y-2 text-gray-300">
        <p>Email: <a className="underline" href={`mailto:${email}`}>{email}</a></p>
        <p>Phone: <a className="underline" href={`tel:${tel}`}>{tel}</a></p>
        <div className="flex gap-3 pt-2">
          <a className="underline" href={social.GitHub.url} target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline" href={social.LinkedIn.url} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

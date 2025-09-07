import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container py-10 space-y-14">
        <Header />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Education />
        <Contact />
        <footer className="text-center text-sm text-gray-400 py-8">
          © {new Date().getFullYear()} Habibul Haque
        </footer>
      </div>
    </div>
  )
}

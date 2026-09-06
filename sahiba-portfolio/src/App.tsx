import Nav from './sections/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ClickSpark from './reactbits/ClickSpark'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <ClickSpark sparkColor="#6c5ce7" sparkCount={6} sparkRadius={18} duration={350}>
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </ClickSpark>
      <Footer />
    </div>
  )
}

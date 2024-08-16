import Navbar from '@/components/Navbar'
import WhoIAm from '@/components/WhoIAm'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import '@/styles/globals.scss'

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <section className="section" id="who-i-am">
        <WhoIAm />
      </section>
      <section className="section" id="work-experience">
        <WorkExperience />
      </section>
      <section className="section" id="projects">
        <Projects />
      </section>
      <section className="section" id="contact">
        <Contact />
      </section>
    </main>
  </>
  )
}
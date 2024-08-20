'use client'

import Navbar from '@/components/Navbar'
import WhoIAm from '@/components/WhoIAm'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import '@/styles/globals.scss'
import { Montserrat } from 'next/font/google'


const monts = Montserrat({subsets: ['latin']})

export default function Home() {
  return (
    <>
    <style jsx global>
      {`
        html {
        font-family: ${monts.style.fontFamily}}
      `}
    </style>
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
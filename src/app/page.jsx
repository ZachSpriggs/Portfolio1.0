import WhoIAm from "@/components/WhoIAm";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import "@/styles/globals.scss";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <section className="section" id="who-i-am">
        <WhoIAm />
      </section>
      <section className="section" id="projects">
        <Projects />
      </section>
      <section className="section" id="work-experience">
        <WorkExperience />
      </section>
    </main>
  );
}

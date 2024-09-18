// pages/projects/index.js
import Projects from '@/components/ProjectTest';
import { projects } from "@/data/projects"; // Change this line

export default function ProjectsPage() {
  return (
    <div>
      <h1>My Projects</h1>
      <Projects projects={projects} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: projects || [], // Ensure it's never undefined
    },
  };
}

import { projects } from "@/data/projects";
import Project from "@/components/Project";
import "@/styles/globals.scss"; 

export default function ProjectPage({ params }) {
  const { projectUrl } = params;
  const project = projects.find(p => p.url === projectUrl);

  if (!project) {x
    return <div>Project not found</div>;
  }

  const ProjectComponent = {
    "mama-group": Project,
    "vuniverse": Project,
    "fundstory": Project,
    "operations-analytics": Project
  }[projectUrl];


  if (!ProjectComponent) {
    return <div>Project component not found</div>;
  }

  return <ProjectComponent project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectUrl: project.url,
  }));
}

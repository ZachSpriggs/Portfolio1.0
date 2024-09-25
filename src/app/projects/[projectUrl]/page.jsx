import { projects } from "@/data/projects";
import Project from "@/components/Project";


export default function ProjectPage({ params }) {
  console.log("Rendering ProjectPage, params:", params);
  const { projectUrl } = params;
  console.log("ProjectUrl:", projectUrl);
  
  const project = projects.find(p => p.url === projectUrl);
  console.log("Found project:", project);

  if (!project) {
    console.log("Project not found");
    return <div>Project not found</div>;
  }

  const ProjectComponent = {
    "mama-group": Project,
    "vuniverse": Project,
    "fundstory": Project,
    "dashmart": Project
  }[projectUrl];

  console.log("ProjectComponent:", ProjectComponent);

  if (!ProjectComponent) {
    console.log("Project component not found");
    return <div>Project component not found</div>;
  }

  console.log("Rendering ProjectComponent");
  return <ProjectComponent project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectUrl: project.url,
  }));
}

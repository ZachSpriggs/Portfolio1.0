import { useRouter } from 'next/router';
import { projects } from '@/data/projects';

export default function ProjectPage({ project }) {
  const router = useRouter();

  console.log('Router query:', router.query);
  console.log('Received project:', project);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log('getStaticProps - context:', context);
  const { projectName } = context.params;
  console.log('getStaticProps - projectName:', projectName);
  
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, "-") === projectName);

  console.log('Found project:', project);

  if (!project) {
    return { notFound: true };
  }

  return { 
    props: { project: JSON.parse(JSON.stringify(project)) },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const paths = projects.map(project => ({
    params: { projectName: project.title.toLowerCase().replace(/\s+/g, "-") }
  }));

  console.log('getStaticPaths - paths:', paths);

  return { paths, fallback: true };
}
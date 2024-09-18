import { projects } from './data/projects';

export const routes = projects.map(project => ({
  path: `/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`,
  template: "ProjTest",
  getData: () => ({
    ...project
  })
}));
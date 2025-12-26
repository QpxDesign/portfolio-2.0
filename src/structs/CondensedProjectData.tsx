export enum ProjectTypes {
  COMP = "COMP",
  VIDEO = "VIDEO",
  WRITING = "WRITING",
}

export interface CondensedProjectData {
  name: string;
  title: string;
  type: ProjectTypes;
  blurb: string;
  technologies?: Array<string>;
  link: string;
  featured: boolean | undefined;
}

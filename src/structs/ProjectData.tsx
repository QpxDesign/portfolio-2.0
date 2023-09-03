export interface ProjectData {
  name: string;
  title: string;
  backgroundcolor: string;
  textcolor: string;
  blurb: string;
  points: Array<string>;
  technologies: Array<string>;
  link: string;
  github_link: string;
  isWebsite: boolean;
  centerButtons: boolean;
  onAppStore: boolean | undefined;
  onPlayStore: boolean | undefined;
  appstore_link: string | undefined;
  playstore_link: string | undefined;
  featured: boolean | undefined;
}

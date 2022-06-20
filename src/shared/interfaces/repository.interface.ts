import Technology from "./technology.interface";

export default interface Repository {
  created: number;
  updated: number;
  commits: number;
  stars: number;
  forks: number;
  url: string;
  technologies: Array<Technology>;
}
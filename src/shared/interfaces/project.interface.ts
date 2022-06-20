import Repository from "./repository.interface";

export default interface Project {
  type: string;               // Indicates if the project is open source or private
  img: string;                // Indicates the project wallpaper path
  title: string;              // Name or title of the project
  description: string;        // Brief description of the project
  url: string;                // URL of the project or website
  repository: Repository;     // Project repository
}

import Base from "./Base.js";
import { projectState } from "../store/ProjectState.js";
import { ProjectTypes } from "../types/ProjectTypes.js";
import { projectStatus } from "../utils/project-status.js";
import Project from "./Project.js";
export default class ProjectsList extends Base<HTMLDivElement> {
  private _projects: ProjectTypes[] = []; // * add that beacuse in want to  Clone projects from projectsState
  constructor(private _status: "initial" | "active" | "finished") {
    super("project-list", "app", false, `${_status}-projects`);
    this._renderProjectsList();
    //  get Projects from  proejct state
    projectState.addListener((projects: ProjectTypes[]) => {
      const projectsAfterFilter = this._filterProjectsStatus(projects);
      this._projects = projectsAfterFilter;
      this._renderProjects();
    });
  }

  /**
   * @desc render projects list Specific status
   */
  private _renderProjectsList(): void {
    const title = this.element.querySelector(".title")!;
    title.textContent = `${this._status} projects`;
    const listItem = this.element.querySelector(".projects-list")!;
    const listId = `${this._status}-projects-list`;
    listItem.id = listId;
  }
  /**
   * @desc render projects in project list
   */
  private _renderProjects(): void {
    const projectList = document.getElementById(
      `${this._status}-projects-list`
    )! as HTMLUListElement;
    projectList.innerHTML = ""; // * don't show old projects again after add new project
    for (const project of this._projects) {
      new Project(`${this._status}-projects-list`, project);
    }
  }
  /**
   * @desc take project from state and filter that specific project Status add them in projects array to render
   * @param projects : Project[]
   * @return project after filter
   */
  private _filterProjectsStatus(projects: ProjectTypes[]) {
    const filterProjects = projects.filter((project: ProjectTypes) => {
      if (this._status === "initial") {
        return project.status === projectStatus.Initial;
      } else if (this._status === "active") {
        return project.status === projectStatus.Active;
      } else {
        return project.status === projectStatus.Finished;
      }
    });
    return filterProjects;
  }
}

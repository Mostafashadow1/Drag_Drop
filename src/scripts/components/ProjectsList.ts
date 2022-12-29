import Base from "./Base.js";
import { projectState } from "../store/ProjectState.js";
import { ProjectTypes } from "../types/ProjectTypes.js";
import { projectStatus } from "../utils/project-status.js";
export default class ProjectsList extends Base<HTMLDivElement> {
  private _projects: ProjectTypes[] = []; // add that beacuse in want to  Clone projects from projectsState
  constructor(private _status: "initial" | "active" | "finished") {
    super("project-list", "app", false, `${_status}-projects`);
    this._renderProjectsList();
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
      const content = this._createProjectEle(project);
      projectList.innerHTML += content;
    }
  }

  /**
   * @desc create project elements and add content into them
   * @param project : ProjectTypes
   * @return project element and content
   */
  private _createProjectEle(project: ProjectTypes): any {
    const content = `
    <div class="project" draggable="true">
    <h2 class="project_title" id="project_title">${project.title}</h2>
    <p class="projec_desc" id="project_desc">${project.descraption}</p>
    </div>`;
    return content;
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

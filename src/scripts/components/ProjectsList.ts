import { projectState } from "../data/ProjectState.js";
import Base from "./Base.js";
export default class ProjectsList extends Base<HTMLDivElement> {
  private _projects: any[] = []; // add that beacuse in want to  Clone projects from projectsState
  constructor(private _status: "intial" | "active" | "finished") {
    super("project-list", "app", false, `${_status}-projects`);
    this._renderProjectsList();
    projectState.addLisner((projects: any[]) => {
      this._projects = projects;
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
    for (const project of this._projects) {
      const li = document.createElement("li");
      li.textContent = project.title;
      projectList.appendChild(li);
    }
  }
}

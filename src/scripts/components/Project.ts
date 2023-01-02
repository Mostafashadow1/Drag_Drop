import { ProjectTypes } from "../types/ProjectTypes.js";
import Base from "./Base.js";
export default class Project extends Base<HTMLDivElement> {
  private _project: ProjectTypes;
  constructor(projectListId: string, project: ProjectTypes) {
    super("project-item", projectListId, false, project.id);
    this._project = project;
    this._renderProject();
  }
  /**
   * @desc render project in dom
   */
  private _renderProject(): void {
    const title = this.element.querySelector(
      ".project_title"
    )! as HTMLHeadingElement;
    const desc = this.element.querySelector(
      ".project_desc"
    )! as HTMLParagraphElement;
    title.textContent = this._project.title;
    desc.textContent = this._project.descraption;
  }
  
}

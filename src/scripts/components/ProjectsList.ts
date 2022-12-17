import Base from "./Base.js";
export default class ProjectsList extends Base<HTMLDivElement> {
  constructor(private _status: "intial" | "active" | "finished") {
    super("project-list", "app", false, `${_status}-projects`);
    this._renderProjectsList();
  }

  /**
   * @desc render projects list Specific status
   */
  private _renderProjectsList(): void {
    const title = this.element.querySelector(".title")!;
    title.textContent = `${this._status} projects`;
    const listItem = this.element.querySelector(".list-item")!;
    const listId = `${this._status}-list-item`;
    listItem.id = listId;
  }
}

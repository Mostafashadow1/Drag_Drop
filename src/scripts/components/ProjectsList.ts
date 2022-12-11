import Base from "./Base.js";
export default class ProjectsList extends Base<HTMLDivElement> {
  constructor(private _status: "active" | "finished") {
    super("project-list", "app", false, `${_status}-projects`);
    // render content
    this.renderContent();
  }

  /**render Projects List Specific {Active or Finched}*/
  public renderContent() {
    // target title element and add text
    const title = this.element.querySelector(".title")!;
    title.textContent = `${this._status} projects`;
    // target list item and add id
    const listItem = this.element.querySelector(".list-item")!;
    const listId = `${this._status}-list-item`;
    listItem.id = listId;
  }
}

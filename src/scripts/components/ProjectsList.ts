export class ProjectsList {
  private _template: HTMLTemplateElement;
  private _projectsContainer: HTMLDivElement;
  private _hostElement: HTMLDivElement;
  constructor(private _status: "Active" | "Finished") {
    /* render content list ( projects ) */
    this._template = document.getElementById("list")! as HTMLTemplateElement;
    this._hostElement = document.getElementById("app")! as HTMLDivElement;
    const templateContent = document.importNode(this._template.content, true);
    this._projectsContainer =
      templateContent.firstElementChild! as HTMLDivElement;
    this.renderProjectListsSpecific();
    this._hostElement.insertAdjacentElement(
      "beforeend",
      this._projectsContainer
    );
  }

  /*render Projects List Specific {Active or Finched}*/
  public renderProjectListsSpecific() {
    // target elements : list and title
    const list = this._projectsContainer.querySelector(
      "ul"
    )! as HTMLUListElement;
    const title = this._projectsContainer.querySelector(".title")!;
    list.classList.add(`${this._status}-list`);
    title.textContent = `${this._status} Projects`;
  }
}

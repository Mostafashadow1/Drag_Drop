export class Fields {
  private _template: HTMLTemplateElement;
  private _hostElement: HTMLDivElement;
  private _form: HTMLFormElement;
  constructor() {
    /* Render Template Fields  */
    this._template = document.getElementById("fields")! as HTMLTemplateElement;
    this._hostElement = document.getElementById("app")! as HTMLDivElement;
    const templateContent = document.importNode(this._template.content, true);
    this._form = templateContent.firstElementChild! as HTMLFormElement;
    this._hostElement.insertAdjacentElement("afterbegin", this._form);
  }
}

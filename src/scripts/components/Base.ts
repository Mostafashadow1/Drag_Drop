export default abstract class Base<T extends HTMLElement> {
  private _template: HTMLTemplateElement;
  private _hostElement: HTMLDivElement;
  public element: T;
  constructor(
    private _templateId: string,
    private _hostId: string,
    private _postionElementStart: boolean,
    private _elementId: string
  ) {
    // assign template Element
    this._template = document.getElementById(
      this._templateId
    )! as HTMLTemplateElement;
    // assign host Element
    this._hostElement = document.getElementById(
      this._hostId
    )! as HTMLDivElement;
    // import template content
    const templateContent = document.importNode(this._template.content, true);
    // assign Element to render
    this.element = templateContent.firstElementChild! as T;
    // check element Id is found beacuse  resolve private value is never read [_elemenId , _postionElementStart]
    if (this._elementId) {
      // add element id ? target elmement
      this.element.id = _elementId;
      // insert Element => render element in host by postion
      this._insertElement(this._postionElementStart);
    }
  }

  // insert element in postion [list or fields]
  private _insertElement(postionElementStart: boolean): void {
    const isInsertStart = postionElementStart ? "afterbegin" : "beforeend";
    this._hostElement.insertAdjacentElement(isInsertStart, this.element);
  }

  /* abstarct functions */
  public abstract renderContent(): void;
}

export default class Base<T extends HTMLElement> {
  private _template!: HTMLTemplateElement;
  private _hostElement!: HTMLDivElement;
  public element!: T;
  constructor(
    private _templateId: string,
    private _hostId: string,
    private _postionElementStart: boolean,
    private _elementId: string
  ) {
    const [template, _] = this._targetElements(this._templateId, this._hostId);
    // * Get template content
    const templateContent = document.importNode(template.content, true);
    this._assignElementContent(templateContent, this._elementId);
    this._insertElement(this._postionElementStart);
  }

  /**
   * @desc target template element and host element
   * @return [this._template, this._hostElement]
   */
  private _targetElements(
    templateId: string,
    hostId: string
  ): [HTMLTemplateElement, HTMLDivElement] {
    this._template = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this._hostElement = document.getElementById(hostId)! as HTMLDivElement;
    return [this._template, this._hostElement];
  }
  /**
   * @desc assign content in element
   * @param1 templateContent : any
   * @param2 elementId : string
   */
  private _assignElementContent(templateContent: any, elementId: string) {
    this.element = templateContent.firstElementChild! as T;
    this.element.id = elementId;
  }
  /**
   * @desc insert element in web page by postion
   * @param postionElementStart : boolean
   * */
  private _insertElement(postionElementStart: boolean): void {
    const isInsertStart = postionElementStart ? "afterbegin" : "beforeend";
    this._hostElement.insertAdjacentElement(isInsertStart, this.element);
  }
}

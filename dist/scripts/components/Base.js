export default class Base {
    constructor(_templateId, _hostId, _postionElementStart, _elementId) {
        this._templateId = _templateId;
        this._hostId = _hostId;
        this._postionElementStart = _postionElementStart;
        this._elementId = _elementId;
        this._template = document.getElementById(this._templateId);
        this._hostElement = document.getElementById(this._hostId);
        const templateContent = document.importNode(this._template.content, true);
        this.element = templateContent.firstElementChild;
        if (this._elementId) {
            this.element.id = _elementId;
            this._insertElement(this._postionElementStart);
        }
    }
    _insertElement(postionElementStart) {
        const isInsertStart = postionElementStart ? "afterbegin" : "beforeend";
        this._hostElement.insertAdjacentElement(isInsertStart, this.element);
    }
}
//# sourceMappingURL=Base.js.map
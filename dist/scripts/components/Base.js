export default class Base {
    constructor(_templateId, _hostId, _postionElementStart, _elementId) {
        this._templateId = _templateId;
        this._hostId = _hostId;
        this._postionElementStart = _postionElementStart;
        this._elementId = _elementId;
        const [template, _] = this._targetElements(this._templateId, this._hostId);
        const templateContent = document.importNode(template.content, true);
        this._assignElementContent(templateContent, this._elementId);
        this._insertElement(this._postionElementStart);
    }
    _targetElements(templateId, hostId) {
        this._template = document.getElementById(templateId);
        this._hostElement = document.getElementById(hostId);
        return [this._template, this._hostElement];
    }
    _assignElementContent(templateContent, elementId) {
        this.element = templateContent.firstElementChild;
        this.element.id = elementId;
    }
    _insertElement(postionElementStart) {
        const isInsertStart = postionElementStart ? "afterbegin" : "beforeend";
        this._hostElement.insertAdjacentElement(isInsertStart, this.element);
    }
}
//# sourceMappingURL=Base.js.map
var Base = /** @class */ (function () {
    function Base(_templateId, _hostId, _postionElementStart, _elementId) {
        this._templateId = _templateId;
        this._hostId = _hostId;
        this._postionElementStart = _postionElementStart;
        this._elementId = _elementId;
        var _a = this._targetElements(this._templateId, this._hostId), template = _a[0], _ = _a[1];
        // * Get template content
        var templateContent = document.importNode(template.content, true);
        this._assignElementContent(templateContent, this._elementId);
        this._insertElement(this._postionElementStart);
    }
    /**
     * @desc target template element and host element
     * @return [this._template, this._hostElement]
     */
    Base.prototype._targetElements = function (templateId, hostId) {
        this._template = document.getElementById(templateId);
        this._hostElement = document.getElementById(hostId);
        return [this._template, this._hostElement];
    };
    /**
     * @desc assign content in element
     * @param1 templateContent : any
     * @param2 elementId : string
     */
    Base.prototype._assignElementContent = function (templateContent, elementId) {
        this.element = templateContent.firstElementChild;
        this.element.id = elementId;
    };
    /**
     * @desc insert element in web page by postion
     * @param postionElementStart : boolean
     * */
    Base.prototype._insertElement = function (postionElementStart) {
        var isInsertStart = postionElementStart ? "afterbegin" : "beforeend";
        this._hostElement.insertAdjacentElement(isInsertStart, this.element);
    };
    return Base;
}());
export default Base;

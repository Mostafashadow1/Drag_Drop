var Base = /** @class */ (function () {
    function Base(_templateId, _hostId, _postionElementStart, _elementId) {
        this._templateId = _templateId;
        this._hostId = _hostId;
        this._postionElementStart = _postionElementStart;
        this._elementId = _elementId;
        // assign template Element
        this._template = document.getElementById(this._templateId);
        // assign host Element
        this._hostElement = document.getElementById(this._hostId);
        // import template content
        var templateContent = document.importNode(this._template.content, true);
        // assign Element to render
        this.element = templateContent.firstElementChild;
        // check element Id is found beacuse  resolve private value is never read [_elemenId , _postionElementStart]
        if (this._elementId) {
            // add element id ? target elmement
            this.element.id = _elementId;
            // insert Element => render element in host by postion
            this._insertElement(this._postionElementStart);
        }
    }
    // insert element in postion [list or fields]
    Base.prototype._insertElement = function (postionElementStart) {
        var isInsertStart = postionElementStart ? "afterbegin" : "beforeend";
        this._hostElement.insertAdjacentElement(isInsertStart, this.element);
    };
    return Base;
}());
export default Base;

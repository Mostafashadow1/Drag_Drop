var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Base from "./Base.js";
var ProjectsList = /** @class */ (function (_super) {
    __extends(ProjectsList, _super);
    function ProjectsList(_status) {
        var _this = _super.call(this, "project-list", "app", false, "".concat(_status, "-projects")) || this;
        _this._status = _status;
        // render content
        _this.renderContent();
        return _this;
    }
    /**render Projects List Specific {Active or Finched}*/
    ProjectsList.prototype.renderContent = function () {
        // target title element and add text
        var title = this.element.querySelector(".title");
        title.textContent = "".concat(this._status, " projects");
        // target list item and add id
        var listItem = this.element.querySelector(".list-item");
        var listId = "".concat(this._status, "-list-item");
        listItem.id = listId;
    };
    return ProjectsList;
}(Base));
export default ProjectsList;

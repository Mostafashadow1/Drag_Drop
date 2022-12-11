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
var Fields = /** @class */ (function (_super) {
    __extends(Fields, _super);
    function Fields() {
        var _this = _super.call(this, "fields", "app", true, "form") || this;
        // add some text and render content
        _this.renderContent();
        return _this;
    }
    /** add some text in lable and show  */
    Fields.prototype.renderContent = function () {
        // target title lable and add text
        var title = this.element.querySelector(".title-lable");
        title.textContent = "title";
        // target desc lable and add text
        var description = this.element.querySelector(".desc-lable");
        description.textContent = "description";
    };
    return Fields;
}(Base));
export { Fields };

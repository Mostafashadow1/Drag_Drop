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
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super.call(this, "popup", "app", false, "popup_container") || this;
        _this._closePopup();
        return _this;
    }
    /**sd
     * @desc Close the error popup
     */
    default_1.prototype._closePopup = function () {
        var _this = this;
        var closeButton = this.element.querySelector(".close");
        closeButton.addEventListener("click", function () {
            _this.element.classList.remove("visible_popup");
        });
    };
    return default_1;
}(Base));
export default default_1;

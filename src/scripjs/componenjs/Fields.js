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
import { assignValidateInputs, handleValidationErrors, } from "../utils/validation-helper-fun.js";
var Fields = /** @class */ (function (_super) {
    __extends(Fields, _super);
    function Fields() {
        var _this = _super.call(this, "fields", "app", true, "form") || this;
        _this._targetElementAndAddText();
        _this._addProject();
        return _this;
    }
    /**
     * @desc this function target lables "title and desc" and add some text
     */
    Fields.prototype._targetElementAndAddText = function () {
        var title = this.element.querySelector(".title-lable");
        title.textContent = "title";
        var description = this.element.querySelector(".desc-lable");
        description.textContent = "description";
    };
    /**
     * @desc target inputs "title and desc" and return
     * @returns inputs [title , description]
     */
    Fields.prototype._targetInputs = function () {
        var titleInput = document.getElementById("title");
        var descInput = document.getElementById("desc");
        return [titleInput, descInput];
    };
    /**
     * @desc take params and return values
     * @param titleInput : HTMLInputElement
     * @param descInput :HTMLInputElement
     * @return [titleValue, descValue];
     */
    Fields.prototype._getValueInputs = function (titleInput, descInput) {
        var titleValue = titleInput.value;
        var descValue = descInput.value;
        return [titleValue, descValue];
    };
    /**
     * @desc takes params and validation these.
     * @param1 titleValue : string
     * @param2  descValue : string
     * @return:
     *         ? is valid return true else return error in popup
     */
    Fields.prototype._validateInputsValue = function (titleValue, descValue) {
        var _a = assignValidateInputs(titleValue, descValue), titleValid = _a[0], descValid = _a[1];
        var titleErrorMsg = handleValidationErrors(titleValid);
        var descErrorMsg = handleValidationErrors(descValid);
        var popup = document.querySelector(".popup_container");
        var descPopup = document.querySelector(".desc_popup");
        if (titleErrorMsg.length) {
            popup.classList.add("visible_popup");
            descPopup.textContent = titleErrorMsg;
        }
        else if (descErrorMsg.length) {
            popup.classList.add("visible_popup");
            descPopup.textContent = descErrorMsg;
        }
        return true;
    };
    /**
     * @desc handle project to add
     * ToDo I will compleate this function
     */
    Fields.prototype._handleAddProject = function (e) {
        e.preventDefault();
        var _a = this._targetInputs(), titleInput = _a[0], descInput = _a[1];
        var _b = this._getValueInputs(titleInput, descInput), titleValue = _b[0], descValue = _b[1];
        if (this._validateInputsValue(titleValue, descValue)) {
            console.log(titleValue, descValue);
        }
    };
    /**
     * @desc finaly add project after submit form
     */
    Fields.prototype._addProject = function () {
        this.element.addEventListener("submit", this._handleAddProject.bind(this));
        // TODO i will remove lisnter
    };
    return Fields;
}(Base));
export default Fields;

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Base from "./Base.js";
import { assignValidateInputs, handleValidationErrors, } from "../utils/validation-helper-fun.js";
import { autoBind } from "../decorators/autoBind.js";
export default class Fields extends Base {
    constructor() {
        super("fields", "app", true, "form");
        this._targetElementAndAddText();
        this._addProject();
    }
    _targetElementAndAddText() {
        const title = this.element.querySelector(".title-lable");
        title.textContent = "title";
        const description = this.element.querySelector(".desc-lable");
        description.textContent = "description";
    }
    _targetInputs() {
        const titleInput = document.getElementById("title");
        const descInput = document.getElementById("desc");
        return [titleInput, descInput];
    }
    _getValueInputs(titleInput, descInput) {
        const titleValue = titleInput.value;
        const descValue = descInput.value;
        return [titleValue, descValue];
    }
    _validateInputsValue(titleValue, descValue) {
        const [titleValid, descValid] = assignValidateInputs(titleValue, descValue);
        const titleErrorMsg = handleValidationErrors(titleValid);
        const descErrorMsg = handleValidationErrors(descValid);
        const popup = document.querySelector(".popup_container");
        const descPopup = document.querySelector(".desc_popup");
        if (titleErrorMsg.length) {
            popup.classList.add("visible_popup");
            descPopup.textContent = titleErrorMsg;
        }
        else if (descErrorMsg.length) {
            popup.classList.add("visible_popup");
            descPopup.textContent = descErrorMsg;
        }
        return true;
    }
    _handleAddProject(e) {
        e.preventDefault();
        const [titleInput, descInput] = this._targetInputs();
        const [titleValue, descValue] = this._getValueInputs(titleInput, descInput);
        if (this._validateInputsValue(titleValue, descValue)) {
            console.log(titleValue, descValue);
        }
    }
    _addProject() {
        this.element.addEventListener("submit", this._handleAddProject);
        this.element.removeEventListener("submit", this._handleAddProject);
    }
}
__decorate([
    autoBind
], Fields.prototype, "_handleAddProject", null);
//# sourceMappingURL=Fields.js.map
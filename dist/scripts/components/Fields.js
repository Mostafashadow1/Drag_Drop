import Base from "./Base.js";
import { assignValidateInputs, handleValidationErrors, } from "../utils/validation-helper-fun.js";
export class Fields extends Base {
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
        if (titleErrorMsg.length) {
            alert(titleErrorMsg);
        }
        else if (descErrorMsg.length) {
            alert(descErrorMsg);
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
        this.element.addEventListener("submit", this._handleAddProject.bind(this));
    }
}
//# sourceMappingURL=Fields.js.map
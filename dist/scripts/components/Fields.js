import Base from "./Base.js";
import { assignValidateInputs, handleValidationErrors, } from "../utils/validation-helper-fun.js";
export class Fields extends Base {
    constructor() {
        super("fields", "app", true, "form");
        this.renderContent();
        this._addProject();
    }
    renderContent() {
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
        handleValidationErrors(titleValid, descValid);
        console.log(titleValid, descValid);
    }
    _handleAddProject(e) {
        e.preventDefault();
        const [titleInput, descInput] = this._targetInputs();
        const [titleValue, descValue] = this._getValueInputs(titleInput, descInput);
        this._validateInputsValue(titleValue, descValue);
        console.log(titleValue, descValue);
    }
    _addProject() {
        this.element.addEventListener("submit", this._handleAddProject.bind(this));
    }
}
//# sourceMappingURL=Fields.js.map
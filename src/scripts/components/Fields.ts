import Base from "./Base.js";
import {
  assignValidateInputs,
  handleValidationErrors,
} from "../utils/validation-helper-fun.js";
export class Fields extends Base<HTMLFormElement> {
  constructor() {
    super("fields", "app", true, "form");
    // add some text and render content
    this.renderContent();
    // add project
    this._addProject();
  }
  /** add some text in lable and show  */
  renderContent(): void {
    // target title lable and add text
    const title = this.element.querySelector(".title-lable")!;
    title.textContent = "title";
    // target desc lable and add text
    const description = this.element.querySelector(".desc-lable")!;
    description.textContent = "description";
  }

  /*target inputs*/
  private _targetInputs(): HTMLInputElement[] {
    const titleInput = document.getElementById("title")! as HTMLInputElement;
    const descInput = document.getElementById("desc")! as HTMLInputElement;
    return [titleInput, descInput];
  }
  /*get value inputs*/
  private _getValueInputs(
    titleInput: HTMLInputElement,
    descInput: HTMLInputElement
  ): string[] {
    const titleValue = titleInput.value;
    const descValue = descInput.value;
    return [titleValue, descValue];
  }

  /*validate inputs values*/
  private _validateInputsValue(titleValue: string, descValue: string) {
    // send title value and desc value to process and get result
    const [titleValid, descValid] = assignValidateInputs(titleValue, descValue);
    // send title valid  process and get error message
    const titleErrorMsg = handleValidationErrors(titleValid);
    // send desc valid  process and get error message
    const descErrorMsg = handleValidationErrors(descValid);
    // cheack is found error message ? return error : return true : mean values are valid
    if (titleErrorMsg.length) {
      alert(titleErrorMsg);
    } else if (descErrorMsg.length) {
      alert(descErrorMsg);
    }
    return true;
  }

  /* handle add project */
  private _handleAddProject(e: Event): void {
    e.preventDefault();
    // target inputs
    const [titleInput, descInput] = this._targetInputs();
    // get value inputs
    const [titleValue, descValue] = this._getValueInputs(titleInput, descInput);
    // validate inputs values are Valid ? compleate process : stop
    if (this._validateInputsValue(titleValue, descValue)) {
      console.log(titleValue, descValue);
    }
  }

  /*supmit project  'add project'*/
  private _addProject(): void {
    this.element.addEventListener("submit", this._handleAddProject.bind(this));
  }
}

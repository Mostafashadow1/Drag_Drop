import Base from "./Base.js";
import {
  assignValidateInputs,
  handleValidationErrors,
} from "../utils/validation-helper-fun.js";
export class Fields extends Base<HTMLFormElement> {
  constructor() {
    super("fields", "app", true, "form");
    this._targetElementAndAddText();
    this._addProject();
  }

  /**
   * @desc this function target lables "title and desc" and add some text
   */
  private _targetElementAndAddText(): void {
    const title = this.element.querySelector(".title-lable")!;
    title.textContent = "title";
    const description = this.element.querySelector(".desc-lable")!;
    description.textContent = "description";
  }
  /**
   * @desc target inputs "title and desc" and return
   * @returns inputs [title , description]
   */
  private _targetInputs(): HTMLInputElement[] {
    const titleInput = document.getElementById("title")! as HTMLInputElement;
    const descInput = document.getElementById("desc")! as HTMLInputElement;
    return [titleInput, descInput];
  }
  /**
   * @desc take params and return values
   * @param titleInput : HTMLInputElement
   * @param descInput :HTMLInputElement
   * @return [titleValue, descValue];
   */
  private _getValueInputs(
    titleInput: HTMLInputElement,
    descInput: HTMLInputElement
  ): string[] {
    const titleValue = titleInput.value;
    const descValue = descInput.value;
    return [titleValue, descValue];
  }
  /**
   * @desc takes params and validation these.
   * @param titleValue : string
   * @param  descValue : string
   * @returns:
   *         ? is valid return true else return error
   */
  private _validateInputsValue(titleValue: string, descValue: string) {
    const [titleValid, descValid] = assignValidateInputs(titleValue, descValue);
    const titleErrorMsg = handleValidationErrors(titleValid);
    const descErrorMsg = handleValidationErrors(descValid);
    if (titleErrorMsg.length) {
      alert(titleErrorMsg);
    } else if (descErrorMsg.length) {
      alert(descErrorMsg);
    }
    return true;
  }

  /** 
   * @desc handle project to add
   * @param e : Event 
   * todo i will compleate this function
  */
  private _handleAddProject(e: Event): void {
    e.preventDefault();
    const [titleInput, descInput] = this._targetInputs();
    const [titleValue, descValue] = this._getValueInputs(titleInput, descInput);
    if (this._validateInputsValue(titleValue, descValue)) {
      console.log(titleValue, descValue);
    }
  }
  
  /**
   * @desc finaly add project after submit form
   */
  private _addProject(): void {
    this.element.addEventListener("submit", this._handleAddProject.bind(this));
  }
}

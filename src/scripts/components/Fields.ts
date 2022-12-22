import Base from "./Base.js";
import {
  assignValidateInputs,
  handleValidationErrors,
} from "../utils/validation-helper-fun.js";
import { autoBind } from "../decorators/autoBind.js";
import { projectState } from "../data/ProjectState.js";
export default class Fields extends Base<HTMLFormElement> {
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
   * @desc finaly add project after submit form
   */
  private _addProject(): void {
    this.element.addEventListener("submit", this._handleAddProject);
    this.element.removeEventListener("submit", this._handleAddProject);
  }
  /**
   * @desc handle project to add in that use auto bind decorators to resolve problem this keyword.
   *
   */
  @autoBind
  private _handleAddProject(e: Event): void {
    e.preventDefault();
    const [titleInput, descInput] = this._targetInputs();
    const [titleValue, descValue] = this._getValueInputs(titleInput, descInput);
    if (this._validateInputsValue(titleValue, descValue)) {
      projectState.createProject(titleValue, descValue); // * add project in global state
      this._clearInputs(titleInput, descInput);
    }
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
   * @param1 titleValue : string
   * @param2  descValue : string
   * @return:
   *         ? is valid return true else return error in popup
   */
  private _validateInputsValue(titleValue: string, descValue: string) {
    const [titleValid, descValid] = assignValidateInputs(titleValue, descValue);
    const titleErrorMsg = handleValidationErrors(titleValid);
    const descErrorMsg = handleValidationErrors(descValid);
    const popup = document.querySelector(".popup_container")!;
    const descPopup = document.querySelector(".desc_popup")!;
    if (titleErrorMsg.length) {
      popup.classList.add("visible_popup");
      descPopup.textContent = titleErrorMsg;
      return false;
    } else if (descErrorMsg.length) {
      popup.classList.add("visible_popup");
      descPopup.textContent = descErrorMsg;
      return false;
    }
    return true;
  }
  /**
   * @desc clear inputs values
   * @param1 title input : HTMLInputElement
   * @param2 descraption input : HTMLInputElement
   */
  private _clearInputs(
    titleInput: HTMLInputElement,
    descInput: HTMLInputElement
  ): void {
    titleInput.value = "";
    descInput.value = "";
  }
}

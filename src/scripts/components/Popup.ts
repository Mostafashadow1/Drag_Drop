import Base from "./Base.js";
export default class extends Base<HTMLDivElement> {
  constructor() {
    super("popup", "app", false, "popup_container");
    this._closePopup();
  }

  /**sd
   * @desc Close the error popup
   */
  private _closePopup() {
    const closeButton = this.element.querySelector(".close")!;
    closeButton.addEventListener("click", () => {
      this.element.classList.remove("visible_popup");
    });
  }
}

import Base from "./Base.js";
export default class extends Base {
    constructor() {
        super("popup", "app", false, "popup_container");
        this._closePopup();
    }
    _closePopup() {
        const closeButton = this.element.querySelector(".close");
        closeButton.addEventListener("click", () => {
            this.element.classList.remove("visible_popup");
        });
    }
}
//# sourceMappingURL=Popup.js.map
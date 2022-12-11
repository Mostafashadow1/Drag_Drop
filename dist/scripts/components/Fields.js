import Base from "./Base.js";
export class Fields extends Base {
    constructor() {
        super("fields", "app", true, "form");
        this.renderContent();
    }
    renderContent() {
        const title = this.element.querySelector(".title-lable");
        title.textContent = "title";
        const description = this.element.querySelector(".desc-lable");
        description.textContent = "description";
    }
}
//# sourceMappingURL=Fields.js.map
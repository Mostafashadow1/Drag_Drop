import Base from "./Base.js";
export class Fields extends Base<HTMLFormElement> {
  constructor() {
    super("fields", "app", true, "form");
    // add some text and render content
    this.renderContent();
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
}

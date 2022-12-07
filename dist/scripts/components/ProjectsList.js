export class ProjectsList {
    constructor(_status) {
        this._status = _status;
        this._template = document.getElementById("list");
        this._hostElement = document.getElementById("app");
        const templateContent = document.importNode(this._template.content, true);
        this._projectsContainer =
            templateContent.firstElementChild;
        this.renderProjectListsSpecific();
        this._hostElement.insertAdjacentElement("beforeend", this._projectsContainer);
    }
    renderProjectListsSpecific() {
        const list = this._projectsContainer.querySelector("ul");
        const title = this._projectsContainer.querySelector(".title");
        list.classList.add(`${this._status}-list`);
        title.textContent = `${this._status} Projects`;
    }
}
//# sourceMappingURL=ProjectsList.js.map
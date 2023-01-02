import Base from "./Base.js";
export default class Project extends Base {
    constructor(projectListId, project) {
        super("project-item", projectListId, false, project.id);
        this._project = project;
        this._renderProject();
    }
    _renderProject() {
        const title = this.element.querySelector(".project_title");
        const desc = this.element.querySelector(".project_desc");
        title.textContent = this._project.title;
        desc.textContent = this._project.descraption;
    }
}
//# sourceMappingURL=Project.js.map
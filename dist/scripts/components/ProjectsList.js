import { projectState } from "../data/ProjectState.js";
import Base from "./Base.js";
export default class ProjectsList extends Base {
    constructor(_status) {
        super("project-list", "app", false, `${_status}-projects`);
        this._status = _status;
        this._projects = [];
        this._renderProjectsList();
        projectState.addLisner((projects) => {
            this._projects = projects;
            this._renderProjects();
        });
    }
    _renderProjectsList() {
        const title = this.element.querySelector(".title");
        title.textContent = `${this._status} projects`;
        const listItem = this.element.querySelector(".projects-list");
        const listId = `${this._status}-projects-list`;
        listItem.id = listId;
    }
    _renderProjects() {
        const projectList = document.getElementById(`${this._status}-projects-list`);
        for (const project of this._projects) {
            const li = document.createElement("li");
            li.textContent = project.title;
            projectList.appendChild(li);
        }
    }
}
//# sourceMappingURL=ProjectsList.js.map
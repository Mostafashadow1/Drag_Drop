import Base from "./Base.js";
import { projectState } from "../store/ProjectState.js";
import { projectStatus } from "../utils/project-status.js";
import Project from "./Project.js";
export default class ProjectsList extends Base {
    constructor(_status) {
        super("project-list", "app", false, `${_status}-projects`);
        this._status = _status;
        this._projects = [];
        this._renderProjectsList();
        projectState.addListener((projects) => {
            const projectsAfterFilter = this._filterProjectsStatus(projects);
            this._projects = projectsAfterFilter;
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
        projectList.innerHTML = "";
        for (const project of this._projects) {
            new Project(`${this._status}-projects-list`, project);
        }
    }
    _filterProjectsStatus(projects) {
        const filterProjects = projects.filter((project) => {
            if (this._status === "initial") {
                return project.status === projectStatus.Initial;
            }
            else if (this._status === "active") {
                return project.status === projectStatus.Active;
            }
            else {
                return project.status === projectStatus.Finished;
            }
        });
        return filterProjects;
    }
}
//# sourceMappingURL=ProjectsList.js.map
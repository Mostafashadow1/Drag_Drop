import Base from "./Base.js";
export default class ProjectsList extends Base {
    constructor(_status) {
        super("project-list", "app", false, `${_status}-projects`);
        this._status = _status;
        this._renderProjectsList();
    }
    _renderProjectsList() {
        const title = this.element.querySelector(".title");
        title.textContent = `${this._status} projects`;
        const listItem = this.element.querySelector(".list-item");
        const listId = `${this._status}-list-item`;
        listItem.id = listId;
    }
}
//# sourceMappingURL=ProjectsList.js.map
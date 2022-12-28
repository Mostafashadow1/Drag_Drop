import { Project } from "../components/Project.js";
import { projectStatus } from "../utils/project-status.js";
export default class ProjectState {
    constructor() {
        this._projects = [];
        this._listeners = [];
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ProjectState();
            return new ProjectState();
        }
        return this._instance;
    }
    createProject(title, description) {
        const newProject = new Project(Math.random().toString(), title, description, projectStatus.Intial);
        this._projects.push(newProject);
        this._runListeners();
    }
    _runListeners() {
        for (const listener of this._listeners) {
            listener([...this._projects]);
        }
    }
    addListener(listener) {
        this._listeners.push(listener);
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=ProjectState.js.map
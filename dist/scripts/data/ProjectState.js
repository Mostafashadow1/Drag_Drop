export default class ProjectState {
    constructor() {
        this._projects = [];
        this._lisners = [];
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ProjectState();
            return new ProjectState();
        }
        return this._instance;
    }
    createProject(title, description) {
        const newProject = {
            id: Math.random().toString(),
            title,
            description,
        };
        this._projects.push(newProject);
        this._runLisners();
    }
    _runLisners() {
        for (const lisner of this._lisners) {
            lisner([...this._projects]);
        }
    }
    addLisner(lisner) {
        this._lisners.push(lisner);
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=ProjectState.js.map
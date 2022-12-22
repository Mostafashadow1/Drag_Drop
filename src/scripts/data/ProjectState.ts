export default class ProjectState {
  private static _instance: ProjectState;
  private _projects: any[] = [];
  private _lisners: any[] = [];
  private constructor() {}
  /**
   * @desc create singleton instance of ProjectState
   * @return ProjectState
   */
  public static getInstance(): ProjectState {
    if (!this._instance) {
      this._instance = new ProjectState();
      return new ProjectState();
    }
    return this._instance;
  }
  /**
   * @desc  create a new project
   * @param1 title project : string
   * @param2 description project : string
   *  */
  public createProject(title: string, description: string): void {
    const newProject = {
      id: Math.random().toString(),
      title,
      description,
    };
    this._projects.push(newProject);
    this._runLisners();
  }

  /**
   * @desc Run all lisners function and pass projects into them
   */
  private _runLisners(): void {
    for (const lisner of this._lisners) {
      lisner([...this._projects]);
    }
  }
  /**
   * @desc  add lisner in linsers array , when create project
   * @param lisner : Function
   */
  public addLisner(lisner: Function): void {
    this._lisners.push(lisner);
  }
}
export const projectState = ProjectState.getInstance();

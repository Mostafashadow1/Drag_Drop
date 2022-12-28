import { Project } from "../components/Project.js";
import { projectStatus } from "../utils/project-status.js";
export default class ProjectState {
  private static _instance: ProjectState;
  private _projects: Project[] = [];
  private _listeners: any[] = [];
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
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      projectStatus.Intial
    );
    this._projects.push(newProject);
    this._runListeners();
  }
  /**
   * @desc Run all lisners function and pass projects into them
   */
  private _runListeners(): void {
    for (const listener of this._listeners) {
      listener([...this._projects]);
    }
  }
  /**
   * @desc push lisner function in lisners array to get all projects snapshot
   * @param listener : Function
   */
  public addListener(listener: Function): void {
    this._listeners.push(listener);
  }
}
export const projectState = ProjectState.getInstance();

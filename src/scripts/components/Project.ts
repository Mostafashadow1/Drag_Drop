import { projectStatus } from "../utils/project-status";

export class Project {
  constructor(
    public id: string,
    public title: string,
    public descraption: string,
    public status: projectStatus
  ) {}
}

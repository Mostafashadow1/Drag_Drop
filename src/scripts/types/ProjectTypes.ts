import { projectStatus } from "../utils/project-status.js";
export class ProjectTypes {
  constructor(
    public id: string,
    public title: string,
    public descraption: string,
    public status: projectStatus
  ) {}
}

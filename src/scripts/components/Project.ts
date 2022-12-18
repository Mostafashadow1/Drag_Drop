import Base from "./Base.js";
export default class Project extends Base<HTMLDivElement> {
  constructor() {
    super("project-item", "app", false , 'project');
  }
}

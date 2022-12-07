import { Fields } from "./components/Fields.js";
import { ProjectsList } from "./components/ProjectsList.js";
/* render some elements in HTML
1) Fields inputs
2) List Projects
*/
new Fields();
new ProjectsList("Active");
new ProjectsList("Finished");

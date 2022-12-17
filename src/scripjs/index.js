import Fields from "./components/Fields.js";
import ProjectsList from "./components/ProjectsList.js";
import Popup from "./components/Popup.js";
/* render some elements in HTML*/
// Fields inputs
new Fields();
// List Projects
new ProjectsList("intial");
new ProjectsList("active");
new ProjectsList("finished");
// Popup
new Popup();

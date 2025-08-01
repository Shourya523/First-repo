let themeToggle = document.querySelector(".dark_mode_toggle");
console.dir(themeToggle);
let abt_me_sec = document.querySelector(".abt_me_sec");
let skills_sec = document.querySelector(".skills_sec");
let proj_sec = document.querySelector(".proj_sec");
let con_sec = document.querySelector(".con_sec");
let body = document.querySelector("body");
let about_me = document.querySelector(".about_me");
let skills = document.querySelector(".skills");
let projects = document.querySelector(".projects");
let contact_me = document.querySelector(".contact_me");
let sidebar = document.querySelector(".sidebar");
let degree = document.querySelector(".degree");
let name = document.querySelector(".name");

let html_name = document.querySelector(".html_name");
let css_name = document.querySelector(".css_name");
let flutter_name = document.querySelector(".flutter_name");
let dart_name = document.querySelector(".dart_name");
let c_name = document.querySelector(".c_name");
let cpp_name = document.querySelector(".cpp_name");
let js_name = document.querySelector(".js_name");
let python_name = document.querySelector(".python_name");
let ae_name = document.querySelector(".ae_name");
let ps_name = document.querySelector(".ps_name");
let figma_name = document.querySelector(".pr_name");
let blender_name = document.querySelector(".blender_name");
let express_logo = document.querySelector(".express_logo");

let react_name = document.querySelector(".react_name");
let node_name = document.querySelector(".node_name");
let express_name = document.querySelector(".express_name");
let mongo_name = document.querySelector(".mongo_name");
let firebase_name = document.querySelector(".firebase_name");

let mobile_info = document.querySelectorAll(".mobile_info_skills");
let trademark = document.querySelector(".trademark");
let techstackused = document.querySelectorAll(".tech-stack-used");

console.dir(mobile_info);
let isDarkMode = false;

themeToggle.onclick = () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    [abt_me_sec, skills_sec, proj_sec, con_sec].forEach(sec => {
      sec.onmouseover = () => (sec.style.backgroundColor = "rgba(255, 255, 255, 0.05)");
      sec.onmouseout = () => (sec.style.backgroundColor = "");
    });

    console.log("Dark mode enabled");
    body.style.background = "linear-gradient(to right, #0b0c10, #1f2833)";
    body.style.color = "#E0E0E0";

    [about_me, skills, projects, contact_me, ...techstackused].forEach(el => {
      el.style.color = "#E0E0E0";
    });

    techstackused.forEach(el => {
      el.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    });

    sidebar.style.backgroundColor = "rgba(48, 47, 47, 0.15)";
    sidebar.style.border = "1px solid rgba(255,255,255,0.2)";

    themeToggle.style.backgroundImage = "url('moon_darkmode.svg')";
    themeToggle.style.height = "1.75rem";
    themeToggle.style.width = "1.75rem";
    themeToggle.style.filter = "invert() opacity(50%)";
    themeToggle.style.backgroundColor = "transparent";

    degree.style.color = "rgb(156, 156, 156)";
    name.style.gap = "1.2vw";

    [
      html_name, css_name, flutter_name, dart_name, c_name, cpp_name,
      js_name, python_name, ae_name, ps_name, figma_name, blender_name,
      react_name, node_name, express_name, mongo_name, firebase_name
    ].forEach(el => el.style.color = "rgb(234, 234, 234)");
    express_logo.style.backgroundImage = "url('expressdarkmode.svg')";


    mobile_info.forEach(el => el.style.color = "rgb(234, 234, 234)");
    trademark.style.color = "rgb(190, 190, 190)";
  } else {
    [abt_me_sec, skills_sec, proj_sec, con_sec].forEach(sec => {
      sec.onmouseover = () => {
        sec.style.backgroundColor = "rgba(245, 245, 245, .5)";
        sec.style.backdropFilter = "blur(2px)";
      };
      sec.onmouseout = () => {
        sec.style.backgroundColor = "";
        sec.style.backdropFilter = "none";
      };
    });

    console.log("Light mode enabled");
    themeToggle.style.height = "2.5rem";
    themeToggle.style.width = "2.5rem";
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    body.style.backgroundImage =
      "linear-gradient(to right, #dedede 1px, transparent 1px), " +
      "linear-gradient(to bottom, #dedede 1px, transparent 1px)";
    body.style.backgroundSize = "40px 40px";
    body.style.cursor = "url('icons8-mouse-cursor-48.png') 0 0, auto";

    [about_me, skills, projects, contact_me, ...techstackused].forEach(el => {
      el.style.color = "#000000";
    });

    techstackused.forEach(el => {
      el.style.backgroundColor = "#f0f0f0";
    });

    sidebar.style.backgroundColor = "";

    themeToggle.style.backgroundImage = "url('sun_lightmode.svg')";
    themeToggle.style.filter = "none";
    themeToggle.style.backgroundColor = "transparent";

    degree.style.color = "#666666";
    name.style.gap = "1.2vw";

    [
      html_name, css_name, flutter_name, dart_name, c_name, cpp_name,
      js_name, python_name, ae_name, ps_name, figma_name, blender_name,
      react_name, node_name, express_name, mongo_name, firebase_name
    ].forEach(el => el.style.color = "#000000");

    mobile_info.forEach(el => el.style.color = "#000000");
    trademark.style.color = "#333333";
  }
};

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
let mobile_info = document.querySelectorAll(".mobile_info_skills");
let trademark = document.querySelector(".trademark");
console.dir(mobile_info);
let isDarkMode = false;

themeToggle.onclick = () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    abt_me_sec.onmouseover = () => {
      abt_me_sec.style.backgroundColor = "#2F2F2F";
    };

    skills_sec.onmouseover = () => {
      skills_sec.style.backgroundColor = "#2F2F2F";
    };

    proj_sec.onmouseover = () => {
      proj_sec.style.backgroundColor = "#2F2F2F";
    };

    con_sec.onmouseover = () => {
      con_sec.style.backgroundColor = "#2F2F2F";
    };
    abt_me_sec.onmouseout = () => {
      abt_me_sec.style.backgroundColor = "";
    };

    skills_sec.onmouseout = () => {
      skills_sec.style.backgroundColor = "";
    };

    proj_sec.onmouseout = () => {
      proj_sec.style.backgroundColor = "";
    };

    con_sec.onmouseout = () => {
      con_sec.style.backgroundColor = "";
    };


    // 🌙 DARK MODE
    console.log("Dark mode enabled");
    body.style.backgroundColor = "#121212";
    body.style.color = "#E0E0E0";
    body.style.backgroundImage = "none";

    about_me.style.color = "#E0E0E0";
    skills.style.color = "#E0E0E0";
    projects.style.color = "#E0E0E0";
    contact_me.style.color = "#E0E0E0";

    sidebar.style.backgroundColor = "rgb(47, 47, 47)";

    themeToggle.style.backgroundImage = "url('moon_darkmode.svg')";
    themeToggle.style.height = "1.75rem";
    themeToggle.style.width = "1.75rem";
    themeToggle.style.filter = "invert() opacity(50%)";
    themeToggle.style.backgroundColor = "transparent";

    degree.style.color = "rgb(156, 156, 156)";
    name.style.gap = "1.2vw";

    html_name.style.color = "rgb(234, 234, 234)";
    css_name.style.color = "rgb(234, 234, 234)";
    flutter_name.style.color = "rgb(234, 234, 234)";
    dart_name.style.color = "rgb(234, 234, 234)";
    c_name.style.color = "rgb(234, 234, 234)";
    cpp_name.style.color = "rgb(234, 234, 234)";
    js_name.style.color = "rgb(234, 234, 234)";
    python_name.style.color = "rgb(234, 234, 234)";
    ae_name.style.color = "rgb(234, 234, 234)";
    ps_name.style.color = "rgb(234, 234, 234)";
    figma_name.style.color = "rgb(234, 234, 234)";
    blender_name.style.color = "rgb(234, 234, 234)";

    mobile_info.forEach(el => {
      el.style.color = "rgb(234, 234, 234)";
    });

    trademark.style.color = "rgb(190, 190, 190)";
  } else {
    abt_me_sec.onmouseover = () => {
      abt_me_sec.style.backgroundColor = "#F5F5F5";
    };
    abt_me_sec.onmouseout = () => {
      abt_me_sec.style.backgroundColor = "";
    };

    skills_sec.onmouseover = () => {
      skills_sec.style.backgroundColor = "#F5F5F5";
    };
    skills_sec.onmouseout = () => {
      skills_sec.style.backgroundColor = "";
    };

    proj_sec.onmouseover = () => {
      proj_sec.style.backgroundColor = "#F5F5F5";
    };
    proj_sec.onmouseout = () => {
      proj_sec.style.backgroundColor = "";
    };

    con_sec.onmouseover = () => {
      con_sec.style.backgroundColor = "#F5F5F5";
    };
    con_sec.onmouseout = () => {
      con_sec.style.backgroundColor = "";
    };
    // ☀️ LIGHT MODE
    themeToggle.style.height = "2.5rem";
    themeToggle.style.width = "2.5rem";
    console.log("Light mode enabled");
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    body.style.backgroundImage = ""; // or set back to original grid if needed

    about_me.style.color = "#000000";
    skills.style.color = "#000000";
    projects.style.color = "#000000";
    contact_me.style.color = "#000000";

    sidebar.style.backgroundColor = "";

    themeToggle.style.backgroundImage = "url('sun_lightmode.svg')";
    themeToggle.style.filter = "none";
    themeToggle.style.backgroundColor = "transparent";

    degree.style.color = "#666666";
    name.style.gap = "1.2vw";

    html_name.style.color = "#000000";
    css_name.style.color = "#000000";
    flutter_name.style.color = "#000000";
    dart_name.style.color = "#000000";
    c_name.style.color = "#000000";
    cpp_name.style.color = "#000000";
    js_name.style.color = "#000000";
    python_name.style.color = "#000000";
    ae_name.style.color = "#000000";
    ps_name.style.color = "#000000";
    figma_name.style.color = "#000000";
    blender_name.style.color = "#000000";

    mobile_info.forEach(el => {
      el.style.color = "#000000";
    });

    trademark.style.color = "#333333";
  }
};




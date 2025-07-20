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
let techstackused=document.querySelectorAll(".tech-stack-used");
console.dir(mobile_info);
let isDarkMode = false;

themeToggle.onclick = () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    abt_me_sec.onmouseover = () => {
      abt_me_sec.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    };

    skills_sec.onmouseover = () => {
      skills_sec.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    };

    proj_sec.onmouseover = () => {
      proj_sec.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    };

    con_sec.onmouseover = () => {
      con_sec.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
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
    body.style.background = "linear-gradient(to right, #0b0c10, #1f2833)";
    body.style.color = "#E0E0E0";
    // body.style.backgroundImage = "none";

    about_me.style.color = "#E0E0E0";
    skills.style.color = "#E0E0E0";
    projects.style.color = "#E0E0E0";
    contact_me.style.color = "#E0E0E0";
    techstackused.forEach(el => {
      el.style.color = "#E0E0E0";
    });
    techstackused.forEach(el => {
      el.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    });

    sidebar.style.backgroundColor = "rgba(48, 47, 47, 0.15)";
    sidebar.style.border="1px solid rgba(255,255,255,0.2)";

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
      abt_me_sec.style.backgroundColor = "rgba(245, 245, 245, .5)";
      abt_me_sec.style.backdropFilter = "blur(2px)";
    };
    abt_me_sec.onmouseout = () => {
      abt_me_sec.style.backgroundColor = "";
      abt_me_sec.style.backdropFilter = "none";
    };
    

    skills_sec.onmouseover = () => {
      skills_sec.style.backgroundColor = "rgba(245, 245, 245, .5)";
      skills_sec.style.backdropFilter = "blur(2px)";
    };
    skills_sec.onmouseout = () => {
      skills_sec.style.backgroundColor = "";
      skills_sec.style.backdropFilter = "none";
    };

    proj_sec.onmouseover = () => {
      proj_sec.style.backgroundColor = "rgba(245, 245, 245, .5)";
      proj_sec.style.backdropFilter = "blur(2px)";
    };
    proj_sec.onmouseout = () => {
      proj_sec.style.backgroundColor = "";
      proj_sec.style.backdropFilter = "none";
    };

    con_sec.onmouseover = () => {
      con_sec.style.backgroundColor = "rgba(245, 245, 245, .5)";
      con_sec.style.backdropFilter = "blur(2px)";
    };
    con_sec.onmouseout = () => {
      con_sec.style.backgroundColor = "";
      con_sec.style.backdropFilter = "none";
    };
    // ☀️ LIGHT MODE
    themeToggle.style.height = "2.5rem";
    themeToggle.style.width = "2.5rem";
    console.log("Light mode enabled");
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    body.style.backgroundImage =
      "linear-gradient(to right, #dedede 1px, transparent 1px), " +
      "linear-gradient(to bottom, #dedede 1px, transparent 1px)";
    body.style.backgroundSize = "40px 40px";
    body.style.cursor = "url('icons8-mouse-cursor-48.png') 0 0, auto";


    about_me.style.color = "#000000";
    skills.style.color = "#000000";
    projects.style.color = "#000000";
    contact_me.style.color = "#000000";
    techstackused.forEach(el => {
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




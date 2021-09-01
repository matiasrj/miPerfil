//  Pluggin Dark Mode 



 export function addDarkmodeWidget() {

    const script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js";
    script.async=true;

    

    document.body.appendChild(script);
    
    setTimeout(() =>
    new Darkmode().showWidget(),200);

 
  }
  window.addEventListener('load', addDarkmodeWidget);





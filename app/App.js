
import { Footer } from "./components/footer/Footer.js";
import { Header } from "./components/header/Header.js";
import { Main } from "./components/main/Main.js";
import { addDarkmodeWidget } from "./helpers/darkMode.js";


export function App () {
    let $root = document.getElementById('root');
    $root.innerHTML= null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Footer())


    addDarkmodeWidget();
    

    

 

}
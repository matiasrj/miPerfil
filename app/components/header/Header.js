import { Clima } from "./Clima.js";
import { Loader } from "./Loader.js";
import Navbar from "./Navbar.js";

export function Header (){
    const $header = document.createElement ('header');
    $header.appendChild(Loader())
    $header.appendChild(Clima());
    $header.appendChild(Navbar());
    return $header;

}
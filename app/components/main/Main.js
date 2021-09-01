import { WhatsApp } from "../Whatsapp.js";
import {DivisionSeccion} from "./DivisionSeccion.js";
import {Seccion1} from "./Seccion1.js";
import {Seccion2} from "./Seccion2.js";
import {Seccion3}from "./Seccion3.js";

export function Main() {
    
    const $main = document.createElement('main');
    $main.id= 'main';

    

    $main.appendChild(Seccion1());
    $main.appendChild(DivisionSeccion());
    $main.appendChild(Seccion2());
    $main.appendChild(DivisionSeccion());
    $main.appendChild(Seccion3());
    $main.appendChild(WhatsApp());

    return $main;
}
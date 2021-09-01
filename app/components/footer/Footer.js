import { FormContacto } from "./FormContacto.js";

export function Footer () {
    const $footer = document.createElement('footer'),
    $p = document.createElement('p'),
    $style = document.getElementById('dynamic-styles');

    $style.innerHTML += `

    footer p {
        width : 100vw;
        background-color :#222;
        color : white;
        font-size: 3rem;
    }
    `

   
    $footer.appendChild(FormContacto());
    $footer.appendChild($p);
    $p.innerHTML = `Gracias por tu visita al sitio`;
    


    return $footer;
}

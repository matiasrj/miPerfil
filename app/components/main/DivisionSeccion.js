export  function DivisionSeccion () {

    const $division = document.createElement('seccion'),
     $img = document.createElement('img'),
     $style = document.getElementById('dynamic-styles');
    
     $style.innerHTML+= `
     .separador{
        background-color : #64b5f6;
     }

     .separador img {
         width:100vw;
         height:1.5vh;
     }
     
     
     `

    $img.src= "app/assets/img/bars.svg";
    $img.alt= 'Imagen separador';
    $division.appendChild($img);
    $division.classList.add('separador')


    // $style = document.getElementById('dynamic-styles');
    // $style.innerHTML =` 
  

    // `

    return $division;
}
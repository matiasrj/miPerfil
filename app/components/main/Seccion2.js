export function Seccion2 (){
    const d = document;
    const $seccion = d.createElement('section'),
     $articulo = d.createElement('article'),
     $parrafo = d.createElement('p'),
     $pieArticulo = d.createElement('article'),
     
     
     $styles = d.getElementById('dynamic-styles');

     $pieArticulo.classList.add('volver')
   

     /** En caso de personalizar componentes.
      * 
      * $styles.innerHTML+=`

   
     `
     
     */ 

     $styles.innerHTML+=`

   
     `



    $articulo.appendChild($parrafo); 
    $seccion.appendChild($articulo);
    $seccion.appendChild($pieArticulo);
    $seccion.id='seccion2';
    $parrafo.innerHTML=` <p> Intereses  <br> </p>
    <ul> 
    <li> <i class=" tiny material-icons"> brightness_1 </i> Nada como aprender (y hacer) lo que nos apasiona, en mi caso, la programacion y tecnologia.</li><br> 
    <li> <i class="tiny material-icons"> brightness_1 </i>  Una buena serie de ejercicios siempre viene bien.</li><br> 
    <li> <i class="tiny material-icons"> brightness_1 </i> Un buen partido, del deporte que sea.</li><br> 
   </ul>
        
    `

       $pieArticulo.innerHTML=`
       <a href ="#"> Volver </a>`

    return $seccion   
}
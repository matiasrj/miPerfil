export  function Seccion3 (){
    const d = document;
    const $seccion = d.createElement('section'),
     $articulo = d.createElement('article'),
     $parrafo = d.createElement('p'),
     $pieArticulo = d.createElement('article'),
     $styles = d.getElementById('dynamic-styles')


     $pieArticulo.classList.add('volver')


     /** En caso de personalizar componentes.
      * 
      * $styles.innerHTML+=`

   
     `
     
     */   
     


    $articulo.appendChild($parrafo); 
    $seccion.appendChild($articulo);
    $seccion.appendChild($pieArticulo);
    $seccion.id='seccion3';
    $parrafo.innerHTML=`
    <p>Si has llegado hasta aqui, <br><br>
    quizás sea de tu interés contactarme.
    Si tienes alguna consulta, comentario, o estás en búsqueda de iniciar un proyecto, ó simplemente algún
    tips o fuentes desde los cuales aprendí a desarrollar este y otros sitios, no dudes en comunicarte. A continuación
    te dejo un formulario.  <br></p>
    
    <p> Nota: En unos dias más, voy a incorporar a este sitio los links adicionales para que 
    puedas contactarme via LinkedIn, Github, y demas... <br><br> </p> 


    <p> Mientras tanto, espero que tengas un buen día y gracias por tu interés... <br>  <br>
        <i class="tiny material-icons">local_phone</i> +54 0381 5661469
    </p>
    
   


   `


                $pieArticulo.innerHTML=`
                <a href ="#"> Volver </a>`
    return $seccion   
}

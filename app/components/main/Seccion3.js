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
    quizas sea de tu interes contactarme.
    Si tienes alguna consulta, comentario, o estás en búsqueda de iniciar un proyecto, ó simplemente algun
    tips o fuentes desde los cuales aprendí a desarrollar este y otros sitios, no dudes en comunicarte. A continuación
    te dejo un formulario.  <br></p>
    
    <p> Nota: En unos dias mas, voy a incorporar a este sitio los links adicionales para que 
    puedas contactarme via LinkedIn, Github, y demas... <br><br> </p> 


    <p> Mientras tanto, espero que tengas un buen dia y gracias por tu interés... <br> </p> 


   `


                $pieArticulo.innerHTML=`
                <a href ="#"> Volver </a>`
    return $seccion   
}
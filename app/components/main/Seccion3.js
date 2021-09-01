export  function Seccion3 (){
    const d = document;
    const $seccion = d.createElement('section'),
     $articulo = d.createElement('article'),
     $parrafo = d.createElement('p'),
     $pieArticulo = d.createElement('article'),
     $styles = d.getElementById('dynamic-styles')


     $pieArticulo.classList.add('volver')


        
    $styles.innerHTML+=`
    p{
        width : 50%;
        text-align:center;
        margin: auto;
        margin-top : 2rem;
        margin-bottom : 2rem;

    }

    .volver{
        text-align: right;
        margin:auto;

    }
  
    `


    $articulo.appendChild($parrafo); 
    $seccion.appendChild($articulo);
    $seccion.appendChild($pieArticulo);
    $seccion.id='seccion3';
    $parrafo.innerHTML=`Seccion 3 <br><br>
     What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
       desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       




       What is Lorem Ipsum?
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.




          
          
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
             desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             
             What is Lorem Ipsum?
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`


                $pieArticulo.innerHTML=`
                <a href ="#"> Volver </a>`
    return $seccion   
}
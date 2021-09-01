export  function Seccion1 (){
    const d = document,
     $seccion = d.createElement('section'),
     $articulo = d.createElement('article'),
 
     $img = d.createElement('img'),
 
     $pieArticulo = d.createElement('article'),

     $parrafo = d.createElement('p'),
     $styles = d.getElementById('dynamic-styles');


    

    $pieArticulo.classList.add('volver')
    
    $styles.innerHTML+=`

    .imagen-perfil {
        border-radius : 50%;
        width : 40%;
        height:auto;
        margin: auto;
        margin-top : 2rem;
        margin-bottom : 2rem;
    }




     .articulo-perfil {
         display : flex;
         flex-direction : row;
         justify-content: space-evently;
         align-items : center;

     }
   
     .articulo-perfil > p {
     width : 50%
          
    }
    
    @media (max-width: 800px) {
        .articulo-perfil {
            display : flex;
            flex-direction : column;
            justify-content: space-evently;
            align-items : center;
        }

        p{
            width : 80%;
        }

    
      }


     `


    $img.src= 'app/assets/img/yo.jpg';
    $img.alt= 'imagen de Perfil' ;
    $img.classList.add('imagen-perfil');

    
    $articulo.classList.add('articulo-perfil')

    $articulo.appendChild($img);
    $articulo.appendChild($parrafo);
    
    
    $seccion.appendChild($articulo);
    $seccion.appendChild($pieArticulo);

    $seccion.id='seccion1';
    $parrafo.innerHTML=`<p>Hola!  Soy Matias Juarez, 
        Ing. Electrónico, dedicado,  por un lado, a la instrumentacion industrial
        y automatizacion de procesos. </p>

        <p>Por otro lado, en este ultimo tiempo he desarrollado proyectos relacionados 
        al mundo de la programacion.<p>

        <p>De esta manera, utilizando la tecnologia como principal herramienta, busco lograr soluciones
        a las necesidades que le dan forma a cada proyecto</p>`

    
     $pieArticulo.innerHTML=`
        <a href ="#"> Volver </a>
        `
    
   return $seccion   
}

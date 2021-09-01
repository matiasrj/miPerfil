export function FormContacto(){
    const $d = document,
    $seccion = $d.createElement('section'),
    $form = $d.createElement('form'),
    $legend = $d.createElement('legend'),
    $inputName = $d.createElement('input'),
    $inputEmail = $d.createElement('input'),
    $inputAsunto = $d.createElement('input'),
    $inputContenido = $d.createElement('textarea'),
    $inputSubmit = $d.createElement('input'),
    $contenedorRespuesta = $d.createElement('div'),
    $pRespuesta = $d.createElement('p'),

    $style = document.getElementById('dynamic-styles');

    $style.innerHTML += `

    .section-form{
        width: 100vw;
        background-color :#6a1b9a; 

    }

    .contacto-form {
        width: 50vw;
        margin: auto; 
    }


  

    input title{
        color: red;
       
    }

    .none{
        display: none;
    }

    .is-active{
        display: block;
    }


    textarea{
        resize: none;
    }

    legend{
        text-align: center;
        margin:auto;
        color: white;
    }

    .submit{
        text-align: center;
        margin:auto;   
        width: 100%;
        background-color: #6a1b9a;
        color: white;
    }

    .contacto-form [required]: valid {
        border: thin solid #6agg9a;
    }

    .contacto-form[required]:invalid {
        border: thin solid #red;
    }


    `

    $form.action="https://formsubmit.co/matiasrj_89@hotmail.com" ;
    $form.method="POST";
    
    $legend.textContent='Envia tu comentario'

    $contenedorRespuesta.classList.add('none');
    $pRespuesta.classList.add('none');

    $seccion.classList.add('section-form')



    $inputName.type='text';
    $inputEmail.type='text';
    $inputAsunto.type='text';

    // $inputContenido.rows=5;
    // $inputContenido.cols=3;
    
    
    $inputSubmit.type='submit';

    $inputName.required=true;
    $inputEmail.required=true;
    $inputAsunto.required=true;
    $inputContenido.required=true;


    $inputName.name='name';
    $inputEmail.name='email';
    $inputAsunto.name='asunto';
    $inputContenido.name='contenido';

    $inputName.placeholder='Nombre';
    $inputEmail.placeholder='Email';
    $inputAsunto.placeholder='Asunto';
    $inputContenido.placeholder='Contenido...';
    $inputSubmit.value='Enviar Comentario';
    $inputSubmit.classList.add('submit');

    $inputName.title = 'Nombre solo acepta letras y espacios en blanco';
    $inputEmail.title = ' Por favor, ingresa un mail valido'; 
    $inputAsunto.title = 'Asunto solo acepta letras'
    $inputContenido.title = 'Tu  comentario no debe exceder los 255 caracteres';


    $inputName.pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$';
    $inputAsunto.pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$';
    $inputEmail.pattern='^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$';
    // $inputContenido.pattern=' ^.{1,255}$'; textArea no funciona con patter.
    $inputContenido.setAttribute('data-pattern','^.{1,255}$');


    
    
    $contenedorRespuesta.appendChild($pRespuesta);
    
    $form.classList.add('contacto-form');
    $form.appendChild($legend);
    // $form.appendChild($inputName);
    $form.appendChild($inputEmail);
    // $form.appendChild($inputAsunto);
    $form.appendChild($inputContenido);
    $form.appendChild($inputSubmit);
    $form.appendChild($inputSubmit);
    $form.appendChild($contenedorRespuesta);
    $seccion.appendChild($form);


    // Validacion

    setTimeout(()=>{
        
            const $d = document,
            $inputs = $d.querySelectorAll('.contacto-form [required]' );
            console.log($inputs);
            
            $inputs.forEach(element => {

                const $span = $d.createElement('span');
                $span.id = element.name;
                $span.textContent= element.title;
                $span.style.color= '#FFF';
                $span.classList.add('none');
                console.log(element.name);

                element.insertAdjacentElement('afterend',$span);
                
            });



            $d.addEventListener('keyup', (e)=>{
                

                if(e.target.matches('.contacto-form [required]')){

                    const $inp = e.target;
                    const pattern = $inp.pattern || $inp.dataset.pattern;
                    
                    if (pattern && $inp.value !== ''){
                        let regex = new RegExp(pattern);
                        return  regex.exec($inp.value)
                        ?$d.getElementById($inp.name).classList.remove('is-active')
                        :$d.getElementById($inp.name).classList.add('is-active'); 

                    }
                    if (!pattern){

                        return  ($inp.value=== '')
                        ?$d.getElementById($inp.name).classList.remove('is-active')
                        :$d.getElementById($inp.name).classList.add('is-active'); 


                    }

                }

            })
        
        
        },200);

    return $seccion;
}
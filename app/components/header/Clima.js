import {ajax} from '../../helpers/ajax.js'
export  function Clima (){
    
    let $indicador = document.createElement('section'),
    $articulo = document.createElement('article'),
    $p = document.createElement('p'),
    
    $styles = document.getElementById('dynamic-styles');
    $styles.innerHTML+=`
    .clima{
        text-align: right;
        font-size: 10px;
        width: 90vw;
    }

   
     `

     $p.classList.add('clima');

    $articulo.appendChild($p)
    $indicador.appendChild($articulo)


    let getPosition = {
        enableHighAccuracy: false,
        timeout: 1000,
        maximumAge: 0
      };
      
    
    navigator.geolocation.getCurrentPosition(success, error, getPosition);
  
    function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $p.innerHTML= `Si otorgas el permiso de localizacion, <br>
            ó habilitas tu gps, aquí podrás ver  el clima de tu ciudad. `;
            // El usuario denegó el permiso para la Geolocalización.
            break;
        case error.POSITION_UNAVAILABLE:
            $p.innerHTML= `No se pudo cargar el clima <br>, 
            intente cargar la pagina nuevamente. `;
            // La ubicación no está disponible.
            break;
        case error.TIMEOUT:
            $p.innerHTML= `No se pudo cargar el clima <br>, 
            intente cargar la pagina nuevamente. `;
            // Se ha excedido el tiempo para obtener la ubicación.
            break;
        case error.UNKNOWN_ERROR:
            $p.innerHTML= `No se pudo cargar el clima <br>, 
            intente cargar la pagina nuevamente. `;
            // Un error desconocido.
            break;
    }

    document.querySelector('.loader').style.display= 'none';
    };
      
    async function  success(gotPosition) {

        let uLat = gotPosition.coords.latitude,
        uLon = gotPosition.coords.longitude;
        // console.log(`${uLat}`, `${uLon}`);

        let temperatura= 0 ;
        let $url = `https://api.openweathermap.org/data/2.5/weather?lat=${uLat}&lon=${uLon}&appid=53cda1dc8aeadca1594da53595d3fb34`;
        // console.log($url);
        await ajax({url: $url,
               cbSuccess: (params) => {
                let {main,name} = params
                let {temp}  = main
                temperatura = (parseInt(temp) -273.15).toFixed(2);
                $p.innerText= `${name} \n
                Temperatura Actual: `+ temperatura + `°C`;
                console.log(temperatura)}
            });

        document.querySelector('.loader').style.display= 'none';
        };

       
    return $indicador;
}
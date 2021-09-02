import {ajax} from '../../helpers/ajax.js'
export  function Clima (){
    
    let $indicador = document.createElement('section'),
    $articulo = document.createElement('article'),
    $p = document.createElement('p');

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
    $p.innerText= 'No se pudo cargar el clima, <br>intente cargar la pagina nuevamente o habilitar el permiso correspondiente.';
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

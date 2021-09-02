// <!-- GetButton.io widget -->

export    function WhatsApp () {

    const $a = document.createElement('a'),
    $imgWhatsApp = document.createElement('img'),
    $styles = document.getElementById('dynamic-styles');



    
    $styles.innerHTML+=`

    .btn-whatsapp{
        position : fixed;
        bottom : 90px;
        right : 30px;
        z-index : 999;
        backgground-color : #222;
        
       
        
    }

    .btn-whatsapp img {
        border-radius: 50%;

       
        
    }


    `

    $imgWhatsApp.src='app/assets/img/WhatsApp_Logo_2.png';
    $imgWhatsApp.width=50;
    $imgWhatsApp.height=50;

    $a.appendChild($imgWhatsApp);


    $a.href= "https://wa.me/543815661469/?text=Hola%20";
    $a.classList.add('btn-whatsapp');
    $a.target= '_blanck';
    return $a;

    
    // <img src="logo.png" width="50" height="50"></img>
}




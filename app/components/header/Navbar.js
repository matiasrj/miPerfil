export default function Navbar() {

    const $nav = document.createElement('nav'),
    $navbarLateral = document.createElement('ul'),
    $style = document.getElementById('dynamic-styles');

    $style.innerHTML += `

    nav {
        font-size: 8rem;
    }
    `
    
    
    
    
    $navbarLateral.classList.add('deep-purple');
    $nav.classList.add('deep-purple');





    $nav.innerHTML=` <div class="nav-wrapper">
    <a href="#!" class="brand-logo">MR</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
      <li>  <a href="#"> <i class=" tiny material-icons left"> home  </i>  Home   </a></li>
      <li> <a href="#seccion1">Presentación</a></li>
      <li> <a href="#seccion2">Intereses</a></li>
      <li> <a href="#seccion3">Contacto</a></li>
    </ul>
  </div>`;
        
    $navbarLateral.classList.add("sidenav");
    $navbarLateral.id="mobile-demo"
    $navbarLateral.innerHTML=`   
    <li><a href="#">Home</a></li>
    <li><a href="#seccion1">Seccion 1</a></li>
    <li><a href="#seccion2">Seccion 2</a></li>
    <li><a href="#seccion3">Seccion 3</a></li>`
  
    $nav.appendChild($navbarLateral)


    // Efecto mobile sidevar
    setTimeout(()=>{ 
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    }, 100)
     
     

  return $nav;
}
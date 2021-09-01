export  function Loader () {

  const $loader = document.createElement('img');
  $loader.src= 'app/assets/loader.svg';
  $loader.alt= 'Cargando...';

  let $style = document.getElementById('dynamic-styles');

  $style.innerHTML += `

  .loader{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;

  }
  `;

  $loader.classList.add('loader');

  return $loader;

};
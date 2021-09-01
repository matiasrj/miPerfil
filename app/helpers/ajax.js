export async function ajax(props) {

    let {url, cbSuccess} = props;
    await fetch(url)
    .then (res => res.ok? res.json(): Promise.reject(res))
    .then (json => cbSuccess(json))
    .catch(err => {
        let messge = err.statusText || 'Ocurrio un error al acceder a la API';
        document.getElementById('main').innerHTML=` <div class = 'Error'> 
        <p> Error ${err.status} : ${err.message}</p> 
        </div>`;

        console.log(err);
    })

}
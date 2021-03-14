document.querySelector('#name').addEventListener('click', function() {

    obtenerDatos();

});

function obtenerDatos() {

    let url = `http://localhost:3000`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function() {

        if (this.status == 200 && this.readyState == 4) {

            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
            for (let item of datos) {
                resultado.innerHTML += ` 
                <div class="row>
                    <div class="col-lg-4" resultado>
                     <div class="card style="width: 18rem;">
                         <img src="${item.url_image}" class="class-image-top img-fluid">
                        <div class="card-body">
                            <h4 class="card-title">${item.name} </h4>    
                                 <p class="card-text">Precio$ ${item.price}</p>
                      </div>
                   </div>
                </div>
            </div>`;
            }

        }

    }
}
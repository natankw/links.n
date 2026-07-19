const area = document.getElementById("downloads");


function mostrarDownloads(lista = listarDownloads()){

    area.innerHTML = "";


    if(lista.length === 0){

        area.innerHTML = `
        <h2>Nenhum download disponível</h2>
        `;

        return;
    }



    lista.forEach(item => {


        area.innerHTML += `

        <div class="card">


        <img src="${item.imagem}" class="thumb">


        <h2>${item.nome}</h2>


        <span>📂 ${item.categoria}</span>


        <p>${item.descricao}</p>


        <small>
        📅 ${item.data}
        </small>


        <br><br>


        <a href="download.html?id=${item.id}">

        <button>
        Ver download
        </button>

        </a>


        </div>

        `;


    });


}



mostrarDownloads();





function filtrar(categoria){


    if(categoria === "Todos"){

        mostrarDownloads();

        return;

    }


    const lista = listarDownloads()
    .filter(item => item.categoria === categoria);



    mostrarDownloads(lista);


}





document
.getElementById("pesquisa")
.addEventListener("input", function(){


    const texto = this.value.toLowerCase();



    const lista = listarDownloads()
    .filter(item => 
        item.nome.toLowerCase()
        .includes(texto)
    );



    mostrarDownloads(lista);


});

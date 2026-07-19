const area = document.getElementById("downloads");


function mostrarDownloads(lista = listarDownloads()){


area.innerHTML="";


lista.forEach(item=>{


area.innerHTML += `

<div class="card">

<img src="${item.imagem}" class="thumb">

<h2>${item.nome}</h2>

<p>📂 ${item.categoria}</p>

<p>${item.descricao}</p>

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



function filtrar(cat){


if(cat=="Todos"){

mostrarDownloads();

return;

}


mostrarDownloads(
listarDownloads().filter(
item=>item.categoria==cat
)
);


}




document.getElementById("pesquisa")
.addEventListener("input",function(){


let texto=this.value.toLowerCase();


mostrarDownloads(

listarDownloads()
.filter(item =>
item.nome.toLowerCase()
.includes(texto)
)

);


});

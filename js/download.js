const area=document.getElementById("download");


const id=new URLSearchParams(
window.location.search
).get("id");


const item=buscarDownload(id);



if(!item){

area.innerHTML="Download não encontrado";


}else{


aumentarViews(id);


area.innerHTML=`

<div class="card">

<img src="${item.imagem}" class="thumb">


<h1>${item.nome}</h1>

<p>${item.descricao}</p>

<p>📂 ${item.categoria}</p>

<p>📦 ${item.versao || ""}</p>

<p>💾 ${item.tamanho || ""}</p>


<a href="${item.link}" target="_blank">

<button>
⬇ Baixar agora
</button>

</a>


</div>

`;

}

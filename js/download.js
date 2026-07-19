const area = document.getElementById("download");


const params = new URLSearchParams(window.location.search);

const id = params.get("id");


const item = buscarDownload(id);



if(!item){

    area.innerHTML = `
    <h1>❌ Download não encontrado</h1>
    `;

}else{


area.innerHTML = `

<div class="card">


<img src="${item.imagem}" class="thumb">


<h1>${item.nome}</h1>


<h3>
📂 ${item.categoria}
</h3>


<p>
${item.descricao}
</p>


<p>
📦 Versão: ${item.versao || "Não informado"}
</p>


<p>
💾 Tamanho: ${item.tamanho || "Não informado"}
</p>


<br>


<a href="${item.link}" target="_blank">

<button>

⬇️ Baixar agora

</button>

</a>


</div>

`;

}

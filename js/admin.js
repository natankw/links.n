let logado=false;

let editando=null;



function login(){


let senha=document.getElementById("senha").value;


if(senha===SENHA_ADMIN){


logado=true;


loginBox.style.display="none";

painel.style.display="block";


listar();


}else{


alert("❌ Senha errada");


}


}





function publicar(){


if(!logado)return;



let arquivo=document.getElementById("imagem").files[0];



let salvar=(imagem)=>{


let dados={


nome:nome.value,

imagem,

categoria:categoria.value,

descricao:descricao.value,

versao:versao.value,

tamanho:tamanho.value,

link:link.value


};



if(editando){


editarDownload(editando,dados);

editando=null;


}else{


adicionarDownload(dados);


}



alert("✅ Salvo");


limpar();

listar();


};





if(arquivo){


let leitor=new FileReader();


leitor.onload=()=>salvar(leitor.result);


leitor.readAsDataURL(arquivo);



}else{


salvar("");

}


}







function listar(){


lista.innerHTML="";


listarDownloads().forEach(item=>{


lista.innerHTML+=`


<div class="card">


<img src="${item.imagem}" class="thumb">


<h3>${item.nome}</h3>


<p>${item.categoria}</p>


<p>👁 ${item.views}</p>



<a href="download.html?id=${item.id}" target="_blank">

🌐 Mini link

</a>


<br><br>


<button onclick="editar(${item.id})">
✏ Editar
</button>


<button onclick="deletar(${item.id})">
🗑 Excluir
</button>


</div>


`;


});


}





function editar(id){


let item=buscarDownload(id);


nome.value=item.nome;

categoria.value=item.categoria;

descricao.value=item.descricao;

versao.value=item.versao;

tamanho.value=item.tamanho;

link.value=item.link;


editando=id;


}





function deletar(id){


if(confirm("Excluir?")){


excluirDownload(id);


listar();


}


}





function limpar(){


document.querySelectorAll("input,textarea")

.forEach(e=>e.value="");


}

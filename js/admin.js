let logado = false;


function login(){

    const senha = document.getElementById("senha").value;

    if(senha === SENHA_ADMIN){

        logado = true;

        document.getElementById("loginBox").style.display = "none";

        document.getElementById("painel").style.display = "block";

        listar();

    }else{

        alert("❌ Senha incorreta");

    }

}



function publicar(){

    if(!logado) return;


    const dados = {

        nome: document.getElementById("nome").value,

        imagem: document.getElementById("imagem").value,

        categoria: document.getElementById("categoria").value,

        descricao: document.getElementById("descricao").value,

        versao: document.getElementById("versao").value,

        tamanho: document.getElementById("tamanho").value,

        link: document.getElementById("link").value

    };


    adicionarDownload(dados);


    alert("✅ Download publicado");


    limpar();

    listar();

}




function listar(){

    const area = document.getElementById("lista");

    if(!area) return;


    area.innerHTML = "";


    listarDownloads().forEach(item => {


        area.innerHTML += `

        <div class="card">

        <img src="${item.imagem}" width="100%">

        <h3>${item.nome}</h3>

        <p>${item.categoria}</p>


        <a href="download.html?id=${item.id}" target="_blank">

        🔗 Abrir mini link

        </a>


        <br><br>


        <button onclick="deletar(${item.id})">

        🗑 Excluir

        </button>


        </div>

        `;


    });

}




function deletar(id){

    if(confirm("Excluir download?")){

        excluirDownload(id);

        listar();

    }

}




function limpar(){

    document.querySelectorAll("input, textarea")
    .forEach(e => e.value = "");

}

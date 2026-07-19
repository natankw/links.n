let logado = false;


function login(){

    const senha = document.getElementById("senha").value;

    if(senha === SENHA_ADMIN){

        logado = true;

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("painel").style.display = "block";

        listar();

    } else {

        alert("❌ Senha incorreta");

    }

}



function publicar(){

    if(!logado) return;


    const arquivo = document.getElementById("imagem").files[0];


    if(!arquivo){

        alert("❌ Escolha uma imagem");

        return;

    }


    const leitor = new FileReader();



    leitor.onload = function(){


        const dados = {

            nome: document.getElementById("nome").value,

            imagem: leitor.result,

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


    };



    leitor.readAsDataURL(arquivo);


}




function listar(){

    const area = document.getElementById("lista");


    if(!area) return;


    area.innerHTML = "";



    listarDownloads().forEach(item => {



        area.innerHTML += `

        <div class="card">


        <img src="${item.imagem}" class="thumb">


        <h3>${item.nome}</h3>


        <p>📂 ${item.categoria}</p>


        <p>${item.descricao}</p>


        <a href="download.html?id=${item.id}" target="_blank">

        🔗 Abrir mini link

        </a>


        <br><br>


        <button onclick="editar(${item.id})">

        ✏️ Editar

        </button>


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




function editar(id){

    const item = buscarDownload(id);


    if(!item) return;


    document.getElementById("nome").value = item.nome;

    document.getElementById("categoria").value = item.categoria;

    document.getElementById("descricao").value = item.descricao;

    document.getElementById("versao").value = item.versao;

    document.getElementById("tamanho").value = item.tamanho;

    document.getElementById("link").value = item.link;


    alert("✏️ Edite os dados e publique novamente");

}




function limpar(){


    document.querySelectorAll("input, textarea")

    .forEach(e => e.value = "");


}

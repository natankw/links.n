let logado = false;
let editando = null;


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



    const arquivo = document.getElementById("imagem").files[0];


    const salvar = (imagem)=>{


        const dados = {

            nome: document.getElementById("nome").value,

            imagem: imagem,

            categoria: document.getElementById("categoria").value,

            descricao: document.getElementById("descricao").value,

            versao: document.getElementById("versao").value,

            tamanho: document.getElementById("tamanho").value,

            link: document.getElementById("link").value,

            destaque: true

        };



        if(editando){

            editarDownload(editando, dados);

            editando = null;


        }else{

            adicionarDownload(dados);

        }



        alert("✅ Download salvo");


        limpar();

        listar();


    };



    if(arquivo){


        const leitor = new FileReader();


        leitor.onload = ()=>{

            salvar(leitor.result);

        };


        leitor.readAsDataURL(arquivo);



    }else{


        salvar("");

    }


}





function listar(){


    const area = document.getElementById("lista");


    if(!area) return;



    area.innerHTML = "";



    listarDownloads().forEach(item=>{


        area.innerHTML += `

        <div class="card">


        <img src="${item.imagem}" class="thumb">


        <h3>${item.nome}</h3>


        <p>📂 ${item.categoria}</p>


        <p>👁 ${item.views || 0} visualizações</p>



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





function editar(id){


    const item = buscarDownload(id);


    if(!item) return;



    document.getElementById("nome").value = item.nome;

    document.getElementById("categoria").value = item.categoria;

    document.getElementById("descricao").value = item.descricao;

    document.getElementById("versao").value = item.versao;

    document.getElementById("tamanho").value = item.tamanho;

    document.getElementById("link").value = item.link;



    editando = id;


    alert("✏️ Edite e clique em publicar");

}





function deletar(id){


    if(confirm("Excluir download?")){


        excluirDownload(id);


        listar();


    }


}





function limpar(){


    document.querySelectorAll("input, textarea")

    .forEach(e=> e.value="");


        }

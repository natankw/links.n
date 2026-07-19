const SENHA_ADMIN = "10092008";


let downloads = JSON.parse(localStorage.getItem("downloads")) || [];



function salvarBanco(){

    localStorage.setItem(
        "downloads",
        JSON.stringify(downloads)
    );

}



function listarDownloads(){

    return downloads;

}



function buscarDownload(id){

    return downloads.find(
        item => item.id == id
    );

}



function adicionarDownload(dados){


    dados.id = Date.now();

    dados.data = new Date()
    .toLocaleDateString("pt-BR");


    dados.views = 0;

    dados.destaque = dados.destaque || false;


    downloads.push(dados);


    salvarBanco();

}





function editarDownload(id, novosDados){


    const item = buscarDownload(id);


    if(item){

        Object.assign(item, novosDados);

        salvarBanco();

    }


}




function excluirDownload(id){


    downloads = downloads.filter(

        item => item.id != id

    );


    salvarBanco();


}





function aumentarViews(id){


    const item = buscarDownload(id);


    if(item){

        item.views++;

        salvarBanco();

    }


}

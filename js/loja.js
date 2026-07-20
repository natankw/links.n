const area = document.getElementById("produtos");


let categoriaAtual = "Todos";





function mostrarProdutos(){


    if(!area) return;



    area.innerHTML = "";



    let lista = listarProdutos();




    if(categoriaAtual !== "Todos"){


        lista = lista.filter(
        produto =>
        produto.categoria === categoriaAtual
        );


    }





    if(lista.length === 0){


        area.innerHTML = `

        <div class="card">

        <h2>
        Nenhum produto disponível
        </h2>

        </div>

        `;


        return;


    }






    lista.forEach(produto=>{


        area.innerHTML += `



        <div class="card">



        <img 
        src="${produto.imagem}"
        >



        <h2>
        ${produto.nome}
        </h2>



        <p>
        ${produto.descricao || ""}
        </p>




        <h3 class="preco">

        R$ ${produto.preco}

        </h3>




        <a href="produto.html?id=${produto.id}">

        <button>

        Comprar

        </button>

        </a>




        </div>



        `;



    });



}








function categoria(nome){


    categoriaAtual = nome;


    mostrarProdutos();


}







function abrirCarrinho(){


    alert(
    "Carrinho em desenvolvimento"
    );


}







mostrarProdutos();

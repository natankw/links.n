const produtos = JSON.parse(
localStorage.getItem("produtos")
) || [];


const pedidos = JSON.parse(
localStorage.getItem("pedidos")
) || [];


const carrinho = JSON.parse(
localStorage.getItem("carrinho")
) || [];





function salvarProdutos(){

localStorage.setItem(
"produtos",
JSON.stringify(produtos)
);

}




function listarProdutos(){

return produtos;

}





function buscarProduto(id){

return produtos.find(
p=>p.id == id
);

}





function adicionarProduto(produto){


produto.id = Date.now();


produtos.push(produto);


salvarProdutos();


}






function editarProduto(id, dados){


let produto =
buscarProduto(id);



if(produto){


Object.assign(
produto,
dados
);



salvarProdutos();


}


}







function excluirProduto(id){


let index =
produtos.findIndex(
p=>p.id == id
);



if(index >= 0){


produtos.splice(
index,
1
);



salvarProdutos();


}


}








function adicionarCarrinho(produto){


carrinho.push(produto);


localStorage.setItem(
"carrinho",
JSON.stringify(carrinho)
);


}







function pegarCarrinho(){

return carrinho;

}







function criarPedido(pedido){


pedidos.push(pedido);



localStorage.setItem(
"pedidos",
JSON.stringify(pedidos)
);


}







function pegarPedidos(){

return pedidos;

}

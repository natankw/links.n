const area =
document.getElementById("produto");



const id =
new URLSearchParams(
window.location.search
).get("id");



const produto =
buscarProduto(id);





if(!produto){


area.innerHTML = `

<div class="card">

<h2>
❌ Produto não encontrado
</h2>

</div>

`;


}else{


area.innerHTML = `


<div class="card">


<img src="${produto.imagem}">


<h1>
${produto.nome}
</h1>



<p>
${produto.descricao}
</p>



<h2 class="preco">

R$ ${produto.preco}

</h2>



<p>
📦 Entrega:
${produto.entrega || "Digital"}
</p>



<button onclick="comprar()">

🛒 Comprar agora

</button>



</div>


`;


}







function comprar(){



const nome =
prompt("Seu nome:");



const whatsapp =
prompt("Seu WhatsApp:");





if(!nome || !whatsapp){


alert(
"Preencha os dados"
);


return;


}






const pedido = {


id:Date.now(),


produto:
produto.nome,


produtoId:
produto.id,


valor:
produto.preco,


cliente:
nome,


whatsapp:
whatsapp,


status:
"Pendente",


data:
new Date()
.toLocaleDateString("pt-BR")


};






criarPedido(pedido);





alert(
"✅ Pedido criado!"
);



}

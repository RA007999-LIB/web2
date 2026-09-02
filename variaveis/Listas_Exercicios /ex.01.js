const form  = document.querySelector('form');
const resp = document.querySelector('#descricao');
const resp1 = document.querySelector('#oferta');

form.addEventListener("submit", (e)=>{
    const nome = (form.inProduto.value);
    const preco = Number(form.inValor.value);
    const valor = (preco * 2) - (preco*0.1);
    resp.innerText = `Promocao de ${nome}!`;
    resp1.innerText = `na compra de 2 un pague R$${valor.toFixed(2)}!`;
    e.preventDefault();
})

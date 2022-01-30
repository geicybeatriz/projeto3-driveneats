let nomePrato = " ";
let nomeBebida = " ";
let nomeSobremesa = " ";

let estaSelecionadoPrato = false;
let estaSelecionadoBebida = false;
let estaSelecionadoSobremesa = false;

let valorPrato=0;
let valorBebida=0;
let valorSobremesa=0;
let total=0;

let nomeUsuario = " ";
let enderecoUsuario = " ";


function selecionarPrato(prato, itemMenu, valor) {
    const selecionado = document.querySelector(".opcoes-menu .selecionadoPrato");

    if(selecionado !== null){
        selecionado.classList.remove("selecionadoPrato");
    } 
    valorPrato = valor;
    nomePrato = itemMenu;
    prato.classList.add("selecionadoPrato");
    estaSelecionadoPrato = true;
    verificarPedido();

}

function selecionarBebida(bebida, itemMenu, valor){
    const selecionado = document.querySelector(".opcoes-menu .selecionadoBebidas");

    if(selecionado !== null){
        selecionado.classList.remove("selecionadoBebidas");
    } 
    valorBebida = valor;
    nomeBebida = itemMenu;
    bebida.classList.add("selecionadoBebidas");
    estaSelecionadoBebida = true;
    verificarPedido();

}

function selecionarSobremesa(sobremesa, itemMenu, valor){
    const selecionado = document.querySelector(".opcoes-menu .selecionadoSobremesas");

    if(selecionado !== null){
        selecionado.classList.remove("selecionadoSobremesas");
    } 
    valorSobremesa = valor;
    nomeSobremesa = itemMenu;
    sobremesa.classList.add("selecionadoSobremesas");
    estaSelecionadoSobremesa = true;
    verificarPedido();

}

function verificarPedido(){
    if((estaSelecionadoPrato) && (estaSelecionadoBebida) && (estaSelecionadoSobremesa)){
        const botao = document.querySelector(".fechar-pedido");
        botao.classList.add("acionado");
        botao.innerHTML = "Fechar pedido";
    }
}

function informarDadosDeUsuario(){
    nomeUsuario = prompt('Por favor, digite o teu nome:');
    enderecoUsuario = prompt('Por favor, informe o endereço para entrega:');
    confirmarPedido();
}
function confirmarPedido() {
    const modal = document.querySelector(".sobreposicao");
    modal.classList.remove("escondido");

    const pratoEscolhido = document.querySelector(".pedido-prato .nome");
    pratoEscolhido.innerHTML = nomePrato;

    const bebidaEscolhida = document.querySelector(".pedido-bebida .nome");
    bebidaEscolhida.innerHTML = nomeBebida;
    
    const sobremesaEscolhida = document.querySelector(".pedido-sobremesa .nome");
    sobremesaEscolhida.innerHTML = nomeSobremesa;

   
    const precoPratoEscolhido = document.querySelector(".pedido-prato .preco");
    precoPratoEscolhido.innerHTML = (valorPrato.toFixed(2)).replace('.',',');
    const precoBebidaEscolhida = document.querySelector(".pedido-bebida .preco");
    precoBebidaEscolhida.innerHTML = (valorBebida.toFixed(2)).replace('.',',');
    const precoSobremesaEscolhida = document.querySelector(".pedido-sobremesa .preco");
    precoSobremesaEscolhida.innerHTML = (valorSobremesa.toFixed(2)).replace('.',',');
    
    total = valorPrato + valorBebida + valorSobremesa;
    const valorTotal = document.querySelector(".pedidos .total .preco");
    valorTotal.innerHTML = `R$ ${(total.toFixed(2)).replace('.',',')}`;
    
    
}
function cancelarPedido(){
    const modal = document.querySelector(".sobreposicao");
    modal.classList.add("escondido");
}

function enviarPedido(){
    const telefoneRestaurante = 5569993756164;
    const mensagemPronta = (`Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato} \n- Bebida: ${nomeBebida} \n- Sobremesa: ${nomeSobremesa} \nTotal: R$ ${(total.toFixed(2)).replace('.',',')} \n \n Nome: ${nomeUsuario} \n Endereço: ${enderecoUsuario}`);
    const mensagem = encodeURIComponent(mensagemPronta);

    const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${mensagem}`;
    const abrirZap = window.open(urlWhatsapp);
    abrirZap.focus();
}


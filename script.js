let nomePrato = " ";
let nomeBebida = " ";
let nomeSobremesa = " ";

let estaSelecionadoPrato = false;
let estaSelecionadoBebida = false;
let estaSelecionadoSobremesa = false;

let valorPrato=0;
let valorBebida=0;
let valorSobremesa=0;
let valorTotal=0;


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
//console.log("calculando orçamento")
//console.log(document.querySelector(#qtde).value)
// manipulação do DOM - Document Object Model - alterar ou manipula os dados no html
// TECLAS Alt + shift + seta para baixo duplica a linha de comando.

document.querySelector("#qtde").addEventListener("change",calcularOrcamento)
document.querySelector("#JS").addEventListener("change",calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change",calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change",calcularOrcamento)
document.querySelector("#prazo").addEventListener("change",calcularOrcamento)
function calcularOrcamento(){
    //verificando a qtd de paginas.   
    let preco = qtde.value*100
    //console.log(qtde,preco)
    
    // verificando se foi realizado o check 
   
    if (js.Checked) preco *= 1.1
    // verificando se precisa de layout
    
    if (layout.Checked) preco += 500
    let taxaUrgencia = preco *(1.1 - prazo.value * 0.1)
    preco += taxaUrgencia
    label_prazo.innerHTML = "Prazo (" + prazo + "semanas")
                                // fixando as casas decimais.                   
    output.innerHTML = "R$ " + preco.toFixed(2)
}


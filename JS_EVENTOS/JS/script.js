let botao = document.querySelector('#btn-aviso')

botao.addEventListener('click', clicou)
botao.addEventListener('mouseenter', entrou)
botao.addEventListener('mouseout', saiu)



function saiu(){
    botao.innerHTML = "Saiu"
}

function entrou(){
    botao.innerHTML = "Entrou"
}

function clicou(){
    botao.innerHTML = "Clicou, não entra nem sai mais!"
    botao.removeEventListener ('mouseenter', entrou)
    botao.removeEventListener ('mouseout', saiu)
}


let botoes = document.querySelectorAll('.item')

botoes.forEach((btn, i)=>{
    btn.addEventListener('click',()=>{
        console.log ("Clicou no botão" + (i+1))
    })

})

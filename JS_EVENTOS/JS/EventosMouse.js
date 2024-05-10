let minhaDiv = document.querySelector('#div1')

minhaDiv.addEventListener('mouseenter', entrar);
minhaDiv.addEventListener('mouseout', saiu);
minhaDiv.addEventListener('click', clicar);
minhaDiv.addEventListener('contextmenu', clickDireito);
minhaDiv.addEventListener('dblclick', clickDuplo);
minhaDiv.addEventListener('mousemove', mover);
minhaDiv.addEventListener('mousedown', apertar);
minhaDiv.addEventListener('mouseup', soltar);

function soltar(){
    minhaDiv.innerHTML = "você soltou"
    minhaDiv.style.backgroundColor = 'lime'
}

function apertar(){
    minhaDiv.innerHTML = "você apertou"
    minhaDiv.style.backgroundColor = 'aqua'
}



function mover(e){
    let x = e.clientX - this.offsetLeft
    let y = e.clientY - this.offsetTop
    let res = document.querySelector('span')
    res.innerHTML = `Posição X: ${x} e Y: ${y}`
}


function clickDuplo(){
    minhaDiv.innerHTML = 'Click Duplo'
    minhaDiv.style.backgroundColor = 'green'
}
function clickDireito(e){
    e.preventDefault()
    minhaDiv.innerHTML = 'Click Direito!'
    minhaDiv.style.backgroundColor = 'pink'

}


function clicar(){
    minhaDiv.innerHTML = "voce clicou"
    minhaDiv.style.backgroundColor = 'orange'
}


function saiu(){
    minhaDiv.innerHTML = "Voce saiu"
    minhaDiv.style.backgroundColor = 'red'
}
function entrar(){
    minhaDiv.innerHTML = "você entrou!"
    minhaDiv.style.backgroundColor = 'blue'
}
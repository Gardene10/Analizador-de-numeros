
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true 
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true

    } else {
        return false
    }

}

function adicionar (){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${ num.value} foi adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontarado na lista.')
    }
    num.value = ''
    num.focus() // para apagar o valor e nao precisar de ficar apagando.
}

// essa é a parte do funcionamento do botao "finalizar."

function finalizar(params) {
    if(valores.length == 0){
        window.alert('Adicionar valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        
        for (let pos in valores){
            if (valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo , temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi  ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado foi  ${menor} </p>`


    }
    
}
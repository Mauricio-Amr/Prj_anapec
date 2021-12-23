const req = require("express/lib/request")

const url = "http://localhost:3000/api/pecas"

const config = { }

const form = new FormData()


function enviar(e) {
        
        const valor = document.getElementById('fm-pesq').value
        getPecas(valor)

        const body = document.querySelector('body')
        const div = document.querySelector('div')
        const paragrafo = document.createElement('p')
        paragrafo.innerHTML = getPecas()
        const lspeca = document.getElementById('lspeca')

        div1.appendChild(paragrafo)
}

function getPecas(codigo){

    if(codigo){
    const url = `http://localhost:3000/api/pecas/${codigo}`

    axios.get(url)
    .then(response =>{
        const data = response.data
        lspeca.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error));}
    
}



 async function addPecas_ori(){   

        const itens = new URLSearchParams()
        itens.append('codigo','teste002')
        itens.append('nome', 'pecateste')
        itens.append('fabricante','fabricanteste')
        itens.append('modelo', 'modeloteste')
        itens.append('linha', 'continuada')
    
        const url = `http://localhost:3000/api/pecas`
    
     await axios({
         method : "post",
         url: `${url}`, 
         data : itens,
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
    .then(response =>{
        alert(response.status)
    })
    .catch(error => console.log(error))   

}

function addPecas_comp(){

}

function attPecas_ori(){

}

function attPecas_comp(){

}




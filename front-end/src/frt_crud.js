const { json } = require("body-parser")
const req = require("express/lib/request")

const url = "http://localhost:3000/api/pecas"

const config = { }

const form = new FormData()


function enviar() {
        
        const valor = document.getElementById('fm-pesq').value
        getPecas(valor)
        
}

async function  getPecas(codigo){

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.getElementById('lspeca').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "CODIGO";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "NOME"; 

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    thead.appendChild(row_1);
    

    if(codigo){
    const url = `http://localhost:3000/api/pecas/${codigo}`

    return await axios.get(url)
    .then(response =>{
        
        
        let data =  response.data.result
         
        console.log(data)

       // for(let k in data){
           // let valor =  data[k]
           // console.log(valor)
            let codigo = data.codigo
            let nome = data.nome
            
            let row_2 = document.createElement('tr');
            let row_2_data_1 = document.createElement('td');
            row_2_data_1.innerHTML = codigo;
            let row_2_data_2 = document.createElement('td');
            row_2_data_2.innerHTML = nome;

            row_2.appendChild(row_2_data_1);
            row_2.appendChild(row_2_data_2);
            tbody.appendChild(row_2);


        //}
        
    })

    .catch(error => console.log(error));
    
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


}

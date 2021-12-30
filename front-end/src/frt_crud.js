const req = require("express/lib/request")

const url = "http://localhost:3000/api/pecas"

const form = new FormData()


function enviar() {
        
        const valor = document.getElementById('fm-pesq').value
        result = getPecas(valor)
        onload (result)
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
        
        console.log(response)

        let data = response.data
         
        console.log(data)


        for(let k in data){
            console.log(k)
            let valor = data[k]
            let codigo = valor.codigo
            let nome = valor.nome
            console.log(codigo , nome)
            console.log(data)

            let row_2 = document.createElement('tr');
            let row_2_data_1 = document.createElement('td');
            row_2_data_1.innerHTML = codigo;
            let row_2_data_2 = document.createElement('td');
            row_2_data_2.innerHTML = nome;

            row_2.appendChild(row_2_data_1);
            row_2.appendChild(row_2_data_2);
            tbody.appendChild(row_2);


        }
        
    })

    .catch(error => console.log(error));
    
}



 async function addPecas_ori(){   


        form.append("codigo" , 'teste001')
        form.append('nome' , 'pecateste')
        form.append('fabricante' , 'fabricanteste')
        form.append('modelo' , 'modeloteste')
        form.append('linha', 'continuada')

    
    const config ={
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    
    const url = `http://localhost:3000/api/pecas`
    
     await axios({
         method : "post",
         url: `${url}`, 
         data : form,
         headers: {"Content-Type": "multipart/form-data"}, })
    .then(response =>{
        alert(response.error)
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

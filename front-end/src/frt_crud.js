const { json } = require("body-parser")
const req = require("express/lib/request")
const { verificar } = require("../../src/services/PecasServices")

const url = "http://localhost:3000/api/pecas"

const config = {}

const form = new FormData()


function enviar() {

    const valor = document.getElementById('fm-pesq-imp').value
    if (document.getElementById('tab-res-pes')) {
        document.getElementById('tab-res-pes').remove()
        getPecas(valor)
    }
    else {
        getPecas(valor)
    }
}

async function getPecas(codigo) {

    //Criando a tabela de resultado  da pesquuisa
    let tabela = document.createElement('table')
    tabela.setAttribute('id', 'tab-res-pes');

    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    //adicionando a tabela a div
    document.getElementById('lspeca').appendChild(tabela);


    //Criando e adicionando o  cabeçalho da tabela
    let linha_1 = document.createElement('tr');
    let coluna_1 = document.createElement('th');
    coluna_1.innerHTML = "CODIGO COMPATIVEL";
    let coluna_2 = document.createElement('th');
    coluna_2.innerHTML = "NOME";
    let coluna_3 = document.createElement('th')
    coluna_3.innerHTML = "MODELO"


    linha_1.appendChild(coluna_1);
    linha_1.appendChild(coluna_2);
    linha_1.appendChild(coluna_3)
    thead.appendChild(linha_1);



    const url = `http://localhost:3000/api/pecas/${codigo}`

    return await axios.get(url)
        .then(response => {


            let data = response.data.result

            console.log(data)
            //console.log(data[0].codigo)


            for (var i = 0; i < data.length; i++) {
                //adiciona o resultado ao  corpo da tabela
                let codigo_comp = data[i].codigo
                let nome = data[i].nome
                let modelo = data[i].modelo

                let linha_2 = document.createElement('tr');
                let linha_2_data_1 = document.createElement('td');
                linha_2_data_1.innerHTML = codigo_comp;
                let linha_2_data_2 = document.createElement('td');
                linha_2_data_2.innerHTML = nome;
                let linha_2_data_3 = document.createElement('td')
                linha_2_data_3.innerHTML = modelo

                linha_2.appendChild(linha_2_data_1);
                linha_2.appendChild(linha_2_data_2);
                linha_2.appendChild(linha_2_data_3)
                tbody.appendChild(linha_2);
            }
        }

        )

        .catch(error => console.log(error));

}





async function addPecas_ori() {

    codigo_pc_ori = document.getElementById('fm-inp-codigo').value
    nome_pc_ori = document.getElementById('fm-inp-nome').value
    fabricante_pc_ori = document.getElementById('fm-inp-fabricante').value
    modelo_pc_ori = document.getElementById('fm-inp-modelo').value
    linha_pc_ori = document.getElementById('fm-inp-linha').value

    console.log(codigo_pc_ori)

    const itens = new URLSearchParams()
    itens.append('codigo', `${codigo_pc_ori}`)
    itens.append('nome', `${nome_pc_ori}`)
    itens.append('fabricante', `${fabricante_pc_ori}`)
    itens.append('modelo', `${modelo_pc_ori}`)
    itens.append('linha', `${linha_pc_ori}`)

    console.log(itens)
    const url = `http://localhost:3000/api/pecas`


    const verificado = await verifCad(`${codigo_pc_ori}`)
        console.log(verificado.codigo)


    if (codigo_pc_ori == verificado.codigo) {
        alert(`${codigo_pc_ori} : codgo ja cadastrado`)
    }
    else {
        await axios({
            method: "post",
            url: `${url}`,
            data: itens,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(response => {
                alert(response.status)
            })
            .catch(error => alert(error))
    }
}


 async function verifCad(codigoDaPeca) {
    const url = `http://localhost:3000/api/pecas/verificar/${codigoDaPeca}`

     return await axios.get(url)
        .then(response => {

            let data = response.data.result
            return data

        }
        )

        .catch(error => console.log(error));
        
}



function addPecas_comp() {

}

function attPecas_ori() {

}

function attPecas_comp() {

}




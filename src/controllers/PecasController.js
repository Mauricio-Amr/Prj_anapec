
const PecasService = require('../services/PecasServices');

module.exports = { 
    buscarTodas : async(req, res) =>{
        let json = {error:'', result:[]};

        let pecas = await PecasService.buscarTodas();

        for (let i in pecas){
            
            json.result.push({
                codigo: pecas[i].codigo,
                nome: pecas[i].nome,
                fabricante: pecas[i].fabricante,
                modelo: pecas[i].modelo,
                linha: pecas[i].linha
                
            })
        }
    },

    buscarUm: async(req,res) =>{
        let json = { error:'', result:{}};

        let codigo = req.params.codigo;
        let pecas = await PecasService.buscarUm(codigo);
        
        if(pecas){
            json.result = pecas

        }

        res.json(json)

    },

    inserir: async(req,res) =>{

        let json = { error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.params.nome;
        let fabricante = req.params.fabricante;
        let modelo = req.params.modelo;
        let linha = req.params.linha;
            
        if(pecas){
            let PecasCodigo = await PecasService.inserir(codigo , nome, fabricante, modelo, linha);
            json.result = {
                codigo: PecasCodigo, nome, fabricante, modelo,linha
            };
        }else{
            json.error = 'Campo  não  enviado '
        }

        res.json(json)


    }

}

const db = require('../db')

module.exports = { 
    buscarTodas: () => { 
        return new Promise((aceito,rejeitado)=>{

        db.query('SELECT * FROM pecas_ori', (error, results)=>{
            if(error){rejeitado(error); return;}
            aceito(results);
        });
    });
    },

    buscarUm: (codigo) =>{
        return new Promise((aceito, rejeitado)=>{
            
            db.query('SELECT * FROM pecas_ori WHERE codigo = ?',[codigo],(error, results)=>{
                if (error){rejeitado(error); return;}
                if (results.length > 0){
                    aceito(results[0])
                }else {
                    aceito(false)
                }
            });
        });
    },

    inserir: (codigo , nome, fabricante, modelo, linha) => {
        return new Promise ((aceito , rejeitado)=>{

            db.query('INSERT INTO pecas_ori (codigo , nome, fabricante, modelo, linha) values (?,?,?,?,?)', 
            [codigo , nome, fabricante, modelo, linha],
            (error, results)=>{
                if(error){rejeitado(error);return;}
                aceito(results.insertCodigo);
            }
         );
        });
    }


};



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
            
            db.query(
            'SELECT * FROM pecas_ori po \
            JOIN compativel cp ON po.codigo = cp.cod_pc_ori \
            JOIN pecas_comp pc ON cp.cod_pc_comp = pc.codigo WHERE po.codigo = ?',[codigo],(error, results)=>{
                if (error){rejeitado(error); return;}
                if (results.length > 0){
                    aceito(results)//removi o  indice da frente do  result [0]
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
    },

    alterar: (codigo , nome, fabricante, modelo, linha) => {
        return new Promise ((aceito , rejeitado)=>{

            db.query('UPDATE pecas_ori SET nome = ?, fabricante = ?, modelo = ?, linha = ? WHERE codigo = ?', 
            [nome, fabricante, modelo, linha, codigo],
            (error, results)=>{
                if(error){rejeitado(error);return;}
                aceito(results);
            }
            
         );
        });
    },

    excluir: (codigo) => { 
        return new Promise((aceito,rejeitado)=>{

        db.query('DELETE FROM pecas_ori WHERE codigo = ?',[codigo], (error, results)=>{
            if(error){rejeitado(error); return;}
            aceito(results);
        });
    });
    }



};


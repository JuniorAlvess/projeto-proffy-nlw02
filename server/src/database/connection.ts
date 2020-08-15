import knex from 'knex';
// serve para direcionar um caminho, mostrar inde deve ficar um arquivo
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        // __dirname retorna o diretorio onde esta sendo executado o __dirname, neste caso é o database.
        // o codigo abaixa criara um arquivo chamado detabase.sqlite
        filename: path.resolve(__dirname, 'database.sqlite') 
    },
    // quando não conseguir indentificar o conteudo padrão para um campo no banco de dados, sera preenchido com null
    useNullAsDefault: true,
});

export default db;
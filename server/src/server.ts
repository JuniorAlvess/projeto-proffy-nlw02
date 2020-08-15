// arquivo principal da aplicação

import express from 'express';
import routes from './routes';
import cors from 'cors';
// tudo vira apartir do app EX: rotas/aplicações
const app = express();

app.use(cors());
// introduzindo um pacote .json/ para que o express possa entender 
app.use(express.json());
app.use(routes);

// request - este paramentro serve para receber requisições como por exemplo o cabeçalho e corpo
// response - este paramentro serve para enviar uma resposta da API para o front-end

/**
 * Params
 * 
 * request Body - corpo da requisição (dados para criação ou atualização de um registro)
 * Route Params - indentifica qual recurso atualizar/deletar
 * Query Params - paginação, filtros, ordenação
 */

// app.get('/users', (request, response) => {
//     const users = [
//         {
//             name: "Junior",
//             age: 22
//         }
//     ]
//     return response.json(users)
//     console.log('Acessou a rota');
// })



// ouvir um endereço http
app.listen(3333);


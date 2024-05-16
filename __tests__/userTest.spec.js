const request=require('supertest');
const app='http://localhost:3000';
describe('Teste das rotas de usuario', ()=>{
    it('Deve listar todos os usuarios', async () => {
        const response = await request(app).get('/user');
        expect(response.status).toBe(200);
    });

    it('Deve retornar um usuario por ID', async () => {
        const response = await request(app).get('/user/1');
        expect(response.status).toBe(200);
    });

    it('Deve realizar login do usuario', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({ login: 'adao', senha: '123456' });
            expect(response.status).toBe(200);
    });

    it('Deve criar um novo usuario', async () => {
        const response = await request(app)
            .post('/user')
            .send({id:2,login: "Enéas é foda",senha: "eneas"});
        expect(response.status).toBe(201); 
    });

    it('Deve atualizar um usuario existente', async () => {
        const response = await request(app)
            .put('/user/2')
            .send({"login": "Enéas é um deus"});
        expect(response.status).toBe(200);
    });

    it('Deve deletar um usuario existente', async () => {
        const response = await request(app).delete('/user/2'); 
        expect(response.status).toBe(200); 
    });
});
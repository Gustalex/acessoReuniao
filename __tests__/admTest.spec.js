const request=require('supertest');
const app='http://localhost:3000';
describe('Teste das rotas de administrador', ()=>{
    it('Deve listar todos os administradores', async () => {
        const response = await request(app).get('/adm');
        expect(response.status).toBe(200);
    });

    it('Deve retornar um administrador por ID', async () => {
        const response = await request(app).get('/adm/1');
        expect(response.status).toBe(200);
    });

    it('Deve realizar login do administrador', async () => {
        const response = await request(app)
            .post('/adm/login')
            .send({ login: 'adao', senha: 'adao' });
        expect(response.status).toBe(200);
    });

    it('Deve criar um novo administrador', async () => {
        const response = await request(app)
            .post('/adm')
            .send({id:2,login: "Enéas é foda",senha: "eneas"});
        expect(response.status).toBe(201); 
    });

    it('Deve atualizar um administrador existente', async () => {
        const response = await request(app)
            .put('/adm/2')
            .send({"login": "Enéas é um deus"});
        expect(response.status).toBe(200);
    });

    it('Deve deletar um administrador existente', async () => {
        const response = await request(app).delete('/adm/2'); 
        expect(response.status).toBe(200); 
    });
});
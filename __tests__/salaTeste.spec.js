const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de sala', ()=>{
    it('Deve listar todas as salas', async () => {
        const response = await request(app).get('/sala');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma sala por ID', async () => {
        const response = await request(app).get('/sala/1');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova sala', async () => {
        const response = await request(app)
            .post('/sala')
            .send({id:4, nome: "Sala 1", andar: 0, area: "CooWork", capMax: 5, observacao: "Arcondicionado quebrado"});
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma sala existente', async () => {
        const response = await request(app)
            .put('/sala/4')
            .send({area: 'cowork'});
        expect(response.status).toBe(200);
    });
    it('Deve deletar uma sala existente', async () => {
        const response = await request(app).delete('/sala/4'); 
        expect(response.status).toBe(200); 
    });
});
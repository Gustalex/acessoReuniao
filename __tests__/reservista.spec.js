const request=require('supertest');
const app='http://localhost:3000';
describe('Teste das rotas de reservista', ()=>{
    it('Deve listar todos os reservistas', async () => {
        const response = await request(app).get('/reservista');
        expect(response.status).toBe(200);
    });

    it('Deve retornar um reservista por ID', async () => {
        const response = await request(app).get('/reservista/1');
        expect(response.status).toBe(200);
    });

    it('Deve criar um novo reservista', async () => {
        const response = await request(app)
            .post('/reservista')
            .send({id:5, cpf: "12345678900", telefone: "(81) 69696-9696", nome: "Adão"});
        expect(response.status).toBe(201); 
    });

    it('Deve atualizar um reservista existente', async () => {
        const response = await request(app)
            .put('/reservista/5')
            .send({email: "frist@gmail.com"});
        expect(response.status).toBe(200);
    });

    it('Deve deletar um reservista existente', async () => {
        const response = await request(app).delete('/reservista/5'); 
        expect(response.status).toBe(200); 
    });
});

const request=require('supertest');
const app='http://localhost:3000';
describe('Teste das rotas de participante', ()=>{
    it('Deve listar todos os participante', async () => {
        const response = await request(app).get('/participante');
        expect(response.status).toBe(200);
    });

    it('Deve retornar um participante por ID', async () => {
        const response = await request(app).get('/participante/1');
        expect(response.status).toBe(200);
    });

    it('Deve criar um novo participante', async () => {
        const response = await request(app)
            .post('/participante')
            .send({id:5, cpf: "12345678900", telefone: "(81) 69696-9696", nome: "Adão"});
        expect(response.status).toBe(201); 
    });

    it('Deve atualizar um participante existente', async () => {
        const response = await request(app)
            .put('/participante/5')
            .send({email: "frist@gmail.com"});
        expect(response.status).toBe(200);
    });

    it('Deve deletar um participante existente', async () => {
        const response = await request(app).delete('/participante/5'); 
        expect(response.status).toBe(200); 
    });
});

const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de listaNegra', ()=>{
    it('Deve listar todas as listaNegras', async () => {
        const response = await request(app).get('/listaNegra');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma listaNegra por ID', async () => {
        const response = await request(app).get('/listaNegra/1');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova listaNegra', async () => {
        const response = await request(app)
            .post('/listaNegra')
            .send({});
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma listaNegra existente', async () => {
        const response = await request(app)
            .put('/listaNegra/1')
            .send({});
        expect(response.status).toBe(200);
    });
    it('Deve deletar uma listaNegra existente', async () => {
        const response = await request(app).delete('/listaNegra/1'); 
        expect(response.status).toBe(200); 
    });
});
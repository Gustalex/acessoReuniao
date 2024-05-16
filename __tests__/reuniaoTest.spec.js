const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de reuniao', ()=>{
    it('Deve listar todas as reuniaos', async () => {
        const response = await request(app).get('/reuniao');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma reuniao por ID', async () => {
        const response = await request(app).get('/reuniao/1');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova reuniao', async () => {
        const response = await request(app)
            .post('/reuniao')
            .send({});
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma reuniao existente', async () => {
        const response = await request(app)
            .put('/reuniao/1')
            .send({});
        expect(response.status).toBe(200);
    });
    it('Deve deletar uma reuniao existente', async () => {
        const response = await request(app).delete('/reuniao/1'); 
        expect(response.status).toBe(200); 
    });
});
const request=require('supertest');
const app = 'http://localhost:3000';


describe('Teste das rotas de reserva', ()=>{
    it('Deve listar todas as reservas', async () => {
        const response = await request(app).get('/reserva');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma reserva por ID', async () => {
        const response = await request(app).get('/reserva/1');
        expect(response.status).toBe(200);
    });
    it('Deve retornar se uma sala está disponivel em um certo horaio', async () => {
        const response = await request(app).get('/reserva/1/2024-04-24T19:37:11.779Z');
        expect(response.status).toBe(200);
    });
    it('Deve retornar todas as reservas de uma sala', async () => {
        const response = await request(app).get('/reserva/status/Concluída');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova reserva', async () => {
        const response = await request(app)
            .post('/reserva')
            .send({id:5, id_reservista: 1, id_sala: 1, id_adm: 1, dataReservada: "2024-05-24T19:37:11.779Z", situacao: "pendente"});
        expect(response.status).toBe(201); 
    });

    it('Deve atualizar uma reserva existente', async () => {
        const response = await request(app)
            .put('/reserva/5')
            .send({dataInicio: "2021-10-11"});
        expect(response.status).toBe(200);
    });
    it('Deve deletar uma reserva existente', async () => {
        const response = await request(app).delete('/reserva/5'); 
        expect(response.status).toBe(200); 
    });
});
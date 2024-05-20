const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de reserva', ()=>{
    const atributos = ['id_reservista', 'id_sala', 'id_adm', 'dataReserva', 'dataReservada', 'horaInicio', 'horaFimReserva', 'statusReserva', 'dataModificacaoStatus', 'motivoReserva'];
    const validData = {
        id:4,
        id_reservista:1,
        id_sala:2,
        id_adm:1,
        dataReserva:new Date(),
        dataReservada:new Date(),
        horaInicio:'13:00',
        dataModificacaoStatus: new Date(),
        motivoReserva: 'Reunião de equipe',
    };

    it('Deve listar todas as reservas', async () => {
        const response = await request(app).get('/reserva');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma reserva por ID', async () => {
        const response = await request(app).get('/reserva/1');
        expect(response.status).toBe(200);
    });
    it('Deve retornar se uma sala está disponivel em um certo horario', async ()=>{
        const response = await request(app).get('/reserva/1/2024-04-24');
        expect(response.status).toBe(200);
    });
    it('Deve retornar se uma sala tem alguma reserva em certa data', async()=>{
        const response=await request(app).get('/reserva/1/2024-04-24/19:37:11');
        expect(response.status).toBe(200);
    });
    it('Deve retornar todas as reservas de uma sala', async () => {
        const response = await
        request(app).get('/reserva/status/concluida');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova reserva', async () => {
        const response = await request(app)
            .post('/reserva')
            .send(validData);
        expect(response.status).toBe(200);
    });
    it('Deve atualizar uma reserva existente', async () => {
        const response = await request(app)
            .put('/reserva/4')
            .send({dataReservada: "2024-06-24"});
        expect(response.status).toBe(200);
    });
    atributos.forEach(atributo => {
        it(`Deve retornar erro ao tentar atualizar com o atributo ${atributo} nulo`, async () => {
            const updatedData = { ...validData, [atributo]: null };
            const response = await request(app)
                .put('/reserva/4')
                .send(updatedData);
            expect(response.status).toBe(500);
        });
    });
    it('Deve deletar uma reserva existente', async () => {
        const response = await request(app).delete('/reserva/4'); 
        expect(response.status).toBe(200); 
    });
});
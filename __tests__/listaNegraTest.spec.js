const request = require('supertest');
const app = 'http://localhost:3000';

describe('Teste das rotas de listaNegra', () => {
    const atributos = ['idResponsavel', 'idReservaMotivo', 'codBloqueio', 'motivo','dataBloqueio'];
    const validData = {
        id:2, //Importante travar no id 2 para não dar erro
        idResponsavel: 1,
        idReservaMotivo: 1,
        codBloqueio: 'P4UDUR0R0S',
        motivo: 'Motivo de exemplo',
        dataBloqueio: '2021-08-01'
    };

    it('Deve listar todas as listaNegras', async () => {
        const response = await request(app).get('/listaNegra');
        expect(response.status).toBe(200);
    });

    it('Deve retornar uma listaNegra por ID', async () => {
        const response = await request(app).get('/listaNegra/2');
        expect(response.status).toBe(200);
    });

    it('Deve criar uma nova listaNegra', async () => {
        const response = await request(app)
            .post('/listaNegra')
            .send(validData);
        expect(response.status).toBe(200);
    });

    it('Deve atualizar uma listaNegra existente com todos os atributos', async () => {
        const response = await request(app)
            .put('/listaNegra/2')
            .send({motivo: 'Novo motivo',});
        expect(response.status).toBe(200);
    });

    atributos.forEach(atributo => {
        it(`Deve retornar erro ao tentar atualizar com o atributo ${atributo} nulo`, async () => {
            const updatedData = { ...validData, [atributo]: null };
            const response = await request(app)
                .put('/listaNegra/2')
                .send(updatedData);
            expect(response.status).toBe(500); 
        });
    });

    it('Deve deletar uma listaNegra existente', async () => {
        const response = await request(app).delete('/listaNegra/2');
        expect(response.status).toBe(200);
    });
});

const request = require('supertest');
const app = 'http://localhost:3000';

describe('Teste das rotas de listaNegra', () => {
    const attributes = ['idResponsavel', 'idReservaMotivo', 'motivo', 'dataBloqueio'];
    const validData = {
        id:2, //Importante travar no id 2 para não dar erro
        idResponsavel: 1,
        idReservaMotivo: 1,
        motivo: 'Motivo de exemplo',
        dataBloqueio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
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
        expect(response.status).toBe(201);
    });

    it('Deve atualizar uma listaNegra existente com todos os atributos', async () => {
        const updatedData = {
            idResponsavel: 2,
            idReservaMotivo: 2,
            motivo: 'Novo motivo',
            updatedAt: new Date()
        };

        const response = await request(app)
            .put('/listaNegra/2')
            .send(updatedData);
        expect(response.status).toBe(200);
    });

    attributes.forEach(attribute => {
        it(`Deve retornar erro ao tentar atualizar com o atributo ${attribute} nulo`, async () => {
            const updatedData = { ...validData, [attribute]: null };
            const response = await request(app)
                .put('/listaNegra/2')
                .send(updatedData);
            expect(response.status).toBe(500); 
        });
    });

    it('Deve deletar uma listaNegra existente', async () => {
        const response = await request(app).delete('/listaNegra/3');
        expect(response.status).toBe(200);
    });
});
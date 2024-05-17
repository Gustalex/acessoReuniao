const request = require('supertest');
const app = 'http://localhost:3000';

describe('Teste das rotas de fracaso', () => {
    const attributes = ['idUser', 'exception', 'mensage'];
    const validData = {
        id:1, //Importante travar no id 1 para não dar erro
        idUser: 1,
        exception: 'Exemplo de exceção',
        mensage: 'Mensagem de exemplo',
        createdAt: new Date(),
        updatedAt: new Date()
    };

    it('Deve listar todas as fracasos', async () => {
        const response = await request(app).get('/fracaso');
        expect(response.status).toBe(200);
    });

    it('Deve retornar uma fracaso por ID', async () => {
        const response = await request(app).get('/fracaso/1');
        expect(response.status).toBe(200);
    });

    it('Deve criar uma nova fracaso', async () => {
        const response = await request(app)
            .post('/fracaso')
            .send(validData);
        expect(response.status).toBe(201);
    });

    it('Deve atualizar uma fracaso existente com todos os atributos', async () => {
        const updatedData = {idUser: 2,exception: 'Nova exceção',mensage: 'Nova mensagem',updatedAt: new Date()};
        const response = await request(app)
            .put('/fracaso/1')
            .send(updatedData);
        expect(response.status).toBe(200);
    });

    attributes.forEach(attribute => {
        it(`Deve retornar erro ao tentar atualizar com o atributo ${attribute} nulo`, async () => {
            const updatedData = { ...validData, [attribute]: null };
            const response = await request(app)
                .put('/fracaso/1')
                .send(updatedData);
            expect(response.status).toBe(500);
        });
    });

    it('Deve deletar uma fracaso existente', async () => {
        const response = await request(app).delete('/fracaso/1');
        expect(response.status).toBe(200);
    });
});

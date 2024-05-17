const request = require('supertest');
const app = 'http://localhost:3000';

describe('Teste das rotas de participante', () => {
    const attributes = ['userId', 'nome', 'sobrenome', 'email', 'numTelefone'];
    const validData = {
        id: 2, // Importante travar no id 2 para não dar erro
        userId: 1,
        nome: 'Enéas',
        sobrenome: 'Ferreira',
        email: 'eneas.ferreira@example.com',
        numTelefone: '(81) 99999-9999',
        createdAt: new Date(),
        updatedAt: new Date()
    };

    it('Deve listar todos os participantes', async () => {
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
            .send(validData);
        expect(response.status).toBe(201);
    });

    it('Deve atualizar um participante existente com todos os atributos', async () => {
        const updatedData = {
            userId: 1,
            nome: 'David',
            sobrenome: 'Enéas',
            numTelefone: '(81) 98888-8888',
            updatedAt: new Date()
        };

        const response = await request(app)
            .put('/participante/2')
            .send(updatedData);
        expect(response.status).toBe(200);
    });

    attributes.forEach(attribute => {
        it(`Deve retornar erro ao tentar atualizar com o atributo ${attribute} nulo`, async () => {
            const updatedData = { ...validData, [attribute]: null };
            const response = await request(app)
                .put('/participante/2')
                .send(updatedData);
            expect(response.status).toBe(500);
        });
    });

    it('Deve deletar um participante existente', async () => {
        const response = await request(app).delete('/participante/2');
        expect(response.status).toBe(200);
    });
});

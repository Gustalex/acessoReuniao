const request = require('supertest');
const app = 'http://localhost:3000';

describe('Teste das rotas de usuario', () => {
    const atributos = ['identificador', 'nome', 'sobrenome', 'email', 'numTelefone', 'dataNascimento'];
    const validData = {
        id: 4, // Importante travar no id 2 para não dar erro
        identificador: '00000000000',
        nome: 'Enéas',
        sobrenome: 'Ferreira',
        email: 'eneas.ferreira@example.com',
        numTelefone: '81999999999',
        dataNascimento: '2003-12-03',
    };

    it('Deve listar todos os usuarios', async () => {
        const response = await request(app).get('/usuario');
        expect(response.status).toBe(200);
    });

    it('Deve retornar um usuario por ID', async () => {
        const response = await request(app).get('/usuario/1');
        expect(response.status).toBe(200);
    });

    it('Deve criar um novo usuario', async () => {
        const response = await request(app)
            .post('/usuario')
            .send(validData);
        expect(response.status).toBe(200);
    });

    it('Deve atualizar um usuario existente com todos os atributos', async () => {
        const response = await request(app)
            .put('/usuario/4')
            .send({nome: 'David', sobrenome: 'Enéas'});
        expect(response.status).toBe(200);
    });

    atributos.forEach(atributo => {
        it(`Deve retornar erro ao tentar atualizar com o atributo ${atributo} nulo`, async () => {
            const updatedData = { ...validData, [atributo]: null };
            const response = await request(app)
                .put('/usuario/4')
                .send(updatedData);
            expect(response.status).toBe(500);
        });
    });

    it('Deve deletar um usuario existente', async () => {
        const response = await request(app).delete('/usuario/4');
        expect(response.status).toBe(200);
    });
});

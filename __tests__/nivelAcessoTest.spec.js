const request = require('supertest');
const app = 'http://localhost:3000';

describe('Teste das rotas de nivelAcesso', () => {
    const atributos = ['nivelAcesso', 'glossarioNivel'];
    const validData = {
        id:5, //Importante travar no id 5 para não dar erro
        nivelAcesso: 1,
        glossarioNivel: 'Nível de Acesso Exemplo',
    };

    it('Deve listar todas as nivelAcessos', async () => {
        const response = await request(app).get('/nivelAcesso');
        expect(response.status).toBe(200);
    });

    it('Deve retornar uma nivelAcesso por ID', async () => {
        const response = await request(app).get('/nivelAcesso/1');
        expect(response.status).toBe(200);
    });

    it('Deve criar uma nova nivelAcesso', async () => {
        const response = await request(app)
            .post('/nivelAcesso')
            .send(validData);
        expect(response.status).toBe(200);
    });

    it('Deve atualizar uma nivelAcesso existente com todos os atributos', async () => {
        const updatedData = {
            nivelAcesso: 2,
            glossarioNivel: 'Novo Nível de Acesso',
        };

        const response = await request(app)
            .put('/nivelAcesso/5')
            .send(updatedData);
        expect(response.status).toBe(200);
    });

    atributos.forEach(atributo => {
        it(`Deve retornar erro ao tentar atualizar com o atributo ${atributo} nulo`, async () => {
            const updatedData = { ...validData, [atributo]: null };
            const response = await request(app)
                .put('/nivelAcesso/5')
                .send(updatedData);
            expect(response.status).toBe(500); 
        });
    });

    it('Deve deletar uma nivelAcesso existente', async () => {
        const response = await request(app).delete('/nivelAcesso/5');
        expect(response.status).toBe(200);
    });
});

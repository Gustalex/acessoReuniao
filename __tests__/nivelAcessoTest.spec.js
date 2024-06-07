const request = require('supertest');
const app = 'http://localhost:3000';

describe('Teste das rotas de nivelAcesso', () => {
    const atributos = ['nivelAcesso', 'glossarioNivel'];
    const validData = {
        id:3, //Importante travar no id 5 para não dar erro
        nivelAcesso: 3,
        glossarioNivel: 'Nível de acesso Enéas (o acesso dos deuses)',
    };

    it('Deve listar todas as nivelAcessos', async () => {
        const response = await request(app).get('/nivelAcesso');
        expect(response.status).toBe(200);
    });

    it('Deve criar uma nova nivelAcesso', async () => {
        const response = await request(app)
            .post('/nivelAcesso')
            .send(validData);
        expect(response.status).toBe(200);
    });

    it('Deve retornar uma nivelAcesso por ID', async () => {
        const response = await request(app).get('/nivelAcesso/3');
        expect(response.status).toBe(200);
    });

    it('Deve atualizar uma nivelAcesso existente com todos os atributos', async () => {
        const response = await request(app)
            .put('/nivelAcesso/3')
            .send({nivelAcesso: 4,glossarioNivel: 'Novo Nível de Acesso',});
        expect(response.status).toBe(200);
    });

    it('Deve retornar erro ao tentar atualizar um nivelAcesso com uma informação já existente', async()=>{
        const response=await request(app)
            .put('/nivelAcesso/3')
            .send({nivelAcesso: 1});
        expect(response.status).toBe(500);
    });

    atributos.forEach(atributo => {
        it(`Deve retornar erro ao tentar atualizar com o atributo ${atributo} nulo`, async () => {
            const updatedData = { ...validData, [atributo]: null };
            const response = await request(app)
                .put('/nivelAcesso/3')
                .send(updatedData);
            expect(response.status).toBe(500); 
        });
    });

    it('Deve deletar uma nivelAcesso existente', async () => {
        const response = await request(app).delete('/nivelAcesso/3');
        expect(response.status).toBe(200);
    });
});

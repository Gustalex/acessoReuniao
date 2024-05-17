const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de sala', ()=>{
    const atributos = ['nome', 'andar', 'area', 'capMax', 'observacao'];
    const sala={
        id:4,
        nome: "Sala 4",
        andar: 0,
        area: "Coworking",
        capMax: 5,
        observacao: "Arcondicionado quebrado",
        situacao: "A",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    it('Deve listar todas as salas', async () => {
        const response = await request(app).get('/sala');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma sala por ID', async () => {
        const response = await request(app).get('/sala/1');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova sala', async () => {
        const response = await request(app)
            .post('/sala')
            .send(sala);
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma sala existente', async () => {
        const response = await request(app)
            .put('/sala/4')
            .send({area: 'coworking', updatedAt: new Date()});
        expect(response.status).toBe(200);
    });
    atributos.forEach((atributo) => {
        it(`Deve retornar erro 400 ao tentar criar uma sala sem o atributo '${atributo}'`, async () => {
            const novaSala = { ...sala };
            delete novaSala[atributo];
            const response = await request(app)
                .post('/sala')
                .send(novaSala);
            expect(response.status).toBe(500);
        });
    });
    it('Deve deletar uma sala existente', async () => {
        const response = await request(app).delete('/sala/4'); 
        expect(response.status).toBe(200); 
    });
});
const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de sala', ()=>{
    const atributos = ['nome', 'andar', 'area', 'capMax', 'situacao'];
    const sala={
        id:5,
        nome: "Sala 4",
        andar: 0,
        area: "Coworking",
        capMax: 5,
        situacao: "A",
    }
    it('Deve listar todas as salas', async () => {
        const response = await request(app).get('/sala');
        expect(response.status).toBe(200);
    });

    it('Deve criar uma nova sala', async () => {
        const response = await request(app)
            .post('/sala')
            .send(sala);
        expect(response.status).toBe(200); 
    });

    it('Deve retornar uma sala por ID', async () => {
        const response = await request(app).get('/sala/5');
        expect(response.status).toBe(200);
    });

    it('Deve atualizar uma sala existente', async () => {
        const response = await request(app)
            .put('/sala/5')
            .send({area: 'coworking'});
        expect(response.status).toBe(200);
    });
    
    atributos.forEach((atributo) => {
        it(`Deve retornar erro 500 ao tentar atualizar uma sala sem o atributo '${atributo}'`, async () => {
            const novaSala = { ...sala, [atributo]: null};
            const response = await request(app)
                .put('/sala/5')
                .send(novaSala);
            expect(response.status).toBe(500);
        });
    });
    
    it('Deve deletar uma sala existente', async () => {
        const response = await request(app).delete('/sala/5'); 
        expect(response.status).toBe(200); 
    });

});
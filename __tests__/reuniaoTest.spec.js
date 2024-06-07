const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de reuniao', ()=>{
    const atributos = ['reservaId', 'idParticipante'];
    const reuniao = {
        id: 4,
        reservaId: 1,
        idParticipante: [2, 3],
    };
    it('Deve listar todas as reuniaos', async () => {
        const response = await request(app).get('/reuniao');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma reuniao por ID', async () => {
        const response = await request(app).get('/reuniao/1');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova reuniao', async () => {
        const response = await request(app)
            .post('/reuniao')
            .send(reuniao);
        expect(response.status).toBe(200); 
    });
    it('Deve atualizar uma reuniao existente', async () => {
        const response = await request(app)
            .put('/reuniao/4')
            .send({ idParticipante:[2] });
        expect(response.status).toBe(200);
    });
    atributos.forEach(atributo => {
        it(`Deve retornar erro 500 ao tentar atualizar uma reunião sem o atributo '${atributo}'`, async () => {
            const novaReuniao = { ...reuniao, [atributo]:null };
            const response = await request(app)
                .put('/reuniao/4')
                .send(novaReuniao);    
            expect(response.status).toBe(500);    
        });
    });
    it('Deve deletar uma reuniao existente', async () => {
        const response = await request(app).delete('/reuniao/4'); 
        expect(response.status).toBe(200); 
    });
});
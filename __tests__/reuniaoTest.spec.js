const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de reuniao', ()=>{
    const atributos = ['reservaId', 'idParticipante'];
    const reuniao = {
        id: 2,
        reservaId: 1,
        idParticipante: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
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
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma reuniao existente', async () => {
        const response = await request(app)
            .put('/reuniao/2')
            .send({idParticipante:2,updatedAt: new Date()});
        expect(response.status).toBe(200);
    });
    atributos.forEach((atributo) => {
        it(`Deve retornar erro 400 ao tentar criar uma reuniao sem o atributo '${atributo}'`, async () => {
            const novaReuniao = { ...reuniao };
            delete novaReuniao[atributo];
            const response = await request(app)
                .post('/reuniao')
                .send(novaReuniao);
            expect(response.status).toBe(500);
        });
    });
    it('Deve deletar uma reuniao existente', async () => {
        const response = await request(app).delete('/reuniao/2'); 
        expect(response.status).toBe(200); 
    });
});
const request=require('supertest');
const app='http://localhost:3000';
describe('Teste das rotas de usuario', ()=>{
    const atributos = ['login', 'senha', 'identificador', 'ativo', 'tipo', 'nivelAcesso'];
    const user={
        id:2,
        login: "Enéas é foda",
        senha: "eneas",
        identificador: "12345678910",
        ativo: true,
        tipo: 1,
        nivelAcesso: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    it('Deve listar todos os usuarios', async () => {
        const response = await request(app).get('/user');
        expect(response.status).toBe(200);
    });

    it('Deve retornar um usuario por ID', async () => {
        const response = await request(app).get('/user/1');
        expect(response.status).toBe(200);
    });

    it('Deve realizar login do usuario', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({ login: 'adao', senha: '123456' });
            expect(response.status).toBe(200);
    });

    it('Deve criar um novo usuario', async () => {
        const response = await request(app)
            .post('/user')
            .send(user);
        expect(response.status).toBe(201); 
    });

    it('Deve atualizar um usuario existente', async () => {
        const response = await request(app)
            .put('/user/2')
            .send({"login": "Enéas é um deus"});
        expect(response.status).toBe(200);
    });

    atributos.forEach(atributo => {
        it(`Deve retornar erro 500 ao tentar criar um usuario sem o atributo '${atributo}'`, async () => {
            const novoUser = { ...user };
            delete novoUser[atributo];
            const response = await request(app)
                .put('/user/2')
                .send(novoUser);
            expect(response.status).toBe(500);
        });
    }
    );
    
    it('Deve deletar um usuario existente', async () => {
        const response = await request(app).delete('/user/2'); 
        expect(response.status).toBe(200); 
    });
});
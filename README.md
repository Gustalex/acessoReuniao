![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![Badge em desenvolvimento](https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=YELLOW&style=for-the-badge)
<!---
![Badge Concluído](https://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)
-->
# Acesso sala reunião - centro de inovação
 
|Participantes|Curso|Função no porjeto|
| -------| --------------------- | --------- |
|Enéas |  Ciência da Computação | Software Engineer |
|Mariah |  Engenharia da Computação | Front End |
|Gustavo |  Engenharia da Computação | Back End |

O objetivo deste projeto é desenvolver uma API REST para auxiliar na gestão de reservas de salas no centro de inovação utilizando a arquitetura MVC (Model-View-Controller) com Javascript atraves do freamework nodeJS. O projeto será integrado ao banco de dados sqLite, garantindo os recursos de criação, consulta, atualização e exclusão de reservas, gerenciamento de salas disponíveis e canceladas, além de relatórios de utilização das salas.

### Funcionalidades Previstas
> Este projeto consiste na criação e integração de uma API desenvolvida em JS e sqLite para auxiliar operações CRUD (Create, Read, Update, Delete) e outras funcionalidade nas entidades de adm, sala, reservista, reserva.
> - adm

|ATRIBUTO|DESCRIÇÃO|TIPO|
| -------| --------------------- | --------- |
|id |  Identificador único da adm | (ObjectID) |
|login | registro de login | (String, obrigatório) |
|senha | senha de acesso de um adm | (String, obrigatório) |

> - reservista

|ATRIBUTO|DESCRIÇÃO|TIPO|
| -------| --------------------- | --------- |
|id |  Identificador único do reservista | (ObjectID) |
|cpf | Número de CPF da pessoa | (String, obrigatório) |
|nome |  Nome completo da pessoa | (String, obrigatório) |

> - sala

|ATRIBUTO|DESCRIÇÃO|TIPO|
| -------| --------------------- | --------- |
|id | Identificador único da sala | (ObjectID) |
|nome | nome destinado a sala | (String, obrigatório)|
|andar | qual andar do CTI está | (Number, obrigatório) |
|area | em qual aréa está localizado ex.: "oxeTech" | (String, obrigatório) |
|capMax | indica se a divida já foi paga ou não | (Number, obrigatório) |
|observacao | compo destinado para indicar se há algo de icomum na sala | (string, opicional) |

> - reserva

|ATRIBUTO|DESCRIÇÃO|TIPO|
| -------| --------------------- | --------- |
|id |Identificador único da reserva	| (ObjectID) |
|id_reservista | ID da pessoa responsável pela reserva | (ObjectID, referência à entidade reservista, obrigatório) |
|id_sala | ID da sala reservada | (ObjectID, referência à entidade sala, obrigatório) |
|id_adm | ID do administrador responsável pela reserva | (ObjectID, referência à entidade adm, obrigatório) |
|dataReservada | Indica a data e hora da reserva | (Date) |
|creatAt | Data de criação do registro da reserva | (Date) |
|upDateAt | Data da última atualização do registro da reserva | (Date) |

### Requisitos funcionais da API
#### CRUD
> Criar entidade
> Mostrar entidade
> Consultar entidade expecifica pelo ID
> Editar entidade
> Deletar entidade
#### Adicionais
> Verificar disponibildaide em uma determinada data para uma sala
> Listar todas as reservas de uma sala
> Listar todas as reservas de um reservista
> Listar todas as reservas de um adm
> Listar todas as reservas de um andar
> Listar todas as reservas de uma área


### Tecnologias Utilizadas
> - Node.js: É uma plataforma de desenvolvimento que permite a execução de código JavaScript no lado do servidor. Ele é amplamente utilizado para criar aplicativos web escaláveis e eficientes.
> - Express.js: É um framework web para Node.js que facilita a criação de aplicativos web e APIs. Ele fornece uma série de recursos para lidar com rotas, middleware e requisições HTTP, além de ser altamente flexível e modular.
> - Jest: É um framework de teste de JavaScript que é amplamente utilizado para testes de unidade e teste de integração. Ele é conhecido por sua simplicidade e rapidez de configuração, e é uma ótima escolha para escrever testes funcionais em Node.js.
> - Zod: É uma biblioteca de validação de dados em TypeScript/JavaScript. Ele permite definir esquemas de validação de dados de forma fácil e expressiva, garantindo que os dados estejam de acordo com as regras de negócio definidas.
> - Nodemon: É uma ferramenta que ajuda no desenvolvimento de aplicações Node.js, monitorando as alterações nos arquivos do projeto e reiniciando automaticamente o servidor quando detecta alguma mudança. Isso ajuda a acelerar o processo de desenvolvimento, pois elimina a necessidade de reiniciar manualmente o servidor a cada alteração.
> - SQLite: É um banco de dados relacional embutido que não requer um servidor separado para ser executado. Ele armazena todo o banco de dados em um único arquivo, o que o torna uma escolha conveniente para projetos menores ou para desenvolvimento e testes locais.

### Como Contribuir
> - Se você deseja contribuir para este projeto, siga os passos abaixo:

```
git clone https://github.com/EneasDavid/acessoReuniao
```
> - Clonar o repositorio

```
npm run dev
```
> - iniciar a API

```
npx sequelize-cli db:migrate
```
> - Criar o banco
```
npx sequelize-cli db:seed:all
```
> - Popular o banco
```
https://www.postman.com/bold-crater-642292/workspace/teste-api-rest-reuniao/collection/23586519-325ce382-50e9-401e-9191-af7971b9a606?action=share&creator=23586519
```
> - Utilize o postman para testar a API
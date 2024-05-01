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
|Mariah |  Engenharia da Computação | editar |
|Gustavo |  Engenharia da Computação | editar |

O objetivo deste projeto é desenvolver uma API REST para auxiliar na gestão de reservas de salas no centro de inovação utilizando a arquitetura MVC (Model-View-Controller) com PHP 8.2 atraves do freamework laravel. O projeto será integrado ao banco de dados mysql, garantindo os recursos de criação, consulta, atualização e exclusão de reservas, gerenciamento de salas disponíveis e canceladas, além de relatórios de utilização das salas.

### Funcionalidades Previstas
> Este projeto consiste na criação e integração de uma API desenvolvida em PHP e MySQL para auxiliar operações CRUD (Create, Read, Update, Delete) e outras funcionalidade nas entidades de adm, sala, reservista, reserva.
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
> - PHP 8.2
> - Laravel
> - Composer 
> - SQLite
> - HTML
> - CSS
> - JavaScript

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

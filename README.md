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


# Estrutura do Banco de Dados

Este documento descreve a estrutura das tabelas do banco de dados utilizado no sistema. As tabelas são organizadas de acordo com as entidades do sistema e seus respectivos atributos.

## Tabelas

1. **NivelAcesso**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | nivelAcesso | Nível de acesso do usuário | Integer |
    | glossarioNivel | Descrição do nível de acesso | String |

2. **Recepcionista**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | login | Registro de login do recepcionista | String |
    | senha | Senha de acesso do recepcionista | String |
    | nome | Nome do recepcionista | String |
    | sobrenome | Sobrenome do recepcionista | String |
    | ativo | Indica se o recepcionista está ativo ou não | Boolean |
    | nivelAcesso | Nível de acesso do recepcionista | Integer (FK -> NivelAcesso) |

3. **Usuario**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | cpf | Número de CPF do usuário | String |
    | nome | Nome do usuário | String |
    | email | Endereço de email do usuário | String |
    | numTelefone | Número de telefone do usuário | String |
    | sobrenome | Sobrenome do usuário | String |
    | dataNascimento | Data de nascimento do usuário | Date |

4. **Sala**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | nome | Nome da sala | String |
    | andar | Andar onde a sala está localizada | Integer |
    | area | Área onde a sala está localizada | String |
    | capMax | Capacidade máxima da sala | Integer |
    | situacao | Situação da sala (DISPONÍVEL ou OCUPADA) | String |

5. **EstadoSala**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | observacao | Observações sobre o estado da sala | String |
    | idSala | Identificador único da sala | Integer (FK -> Sala) |

6. **Reserva**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | id_reservista | ID do usuário responsável pela reserva | Integer (FK -> Usuario) |
    | id_sala | ID da sala reservada | Integer (FK -> Sala) |
    | id_adm | ID do administrador responsável pela reserva | Integer (FK -> Usuario) |
    | dataReserva | Data da reserva | Date |
    | dataReservada | Data e hora da reserva | Date |
    | horaInicio | Hora de início da reserva | String |
    | horaFimReserva | Hora de término da reserva | String |
    | statusReserva | Status da reserva | String |
    | dataModificacaoStatus | Data da última modificação do status | Date |
    | motivoReserva | Motivo da reserva | String |

7. **Fracasso**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | exception | Descrição da exceção | String |
    | mensagem | Mensagem de erro | String |
    | tabelaRelacionada | Tabela relacionada à exceção | String |
    | funcaoRelacionada | Função relacionada à exceção | String |

8. **ListaNegra**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | idResponsavel | ID do usuário responsável | Integer (FK -> Usuario) |
    | idReservaMotivo | ID da reserva associada | Integer (FK -> Reserva) |
    | codBloqueio | Código de bloqueio | String |
    | motivo | Motivo do bloqueio (infração) | String |
    | dataBloqueio | Data do bloqueio | Date |

9. **Reuniao**

    | Atributo | Descrição | Tipo |
    |----------|-----------|------|
    | reservaId | ID da reserva associada | Integer (FK -> Reserva) |
    | idParticipante | ID do participante da reunião | Integer |


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
`Apenas o run dev dá conta de start toda aplicação`
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
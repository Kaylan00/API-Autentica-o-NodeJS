# API-Autentica-o-NodeJS
# NodeJs
API de autenticação com login, registro de usuário e token

Resumo:

Esta API de autenticação fornece recursos para registro de usuário, login e geração de token. Ela é desenvolvida em Node.js puro e não utiliza um banco de dados.

Requisitos:

Node.js 16.x ou superior
Postman
Como testar:

Baixe o Postman e abra-o.
Importe o arquivo api.postman_collection.json para o Postman.
Siga as instruções nas coleções para testar os recursos da API.
Recursos:

Registro de usuário:
Método: POST
URL: http://localhost:3000/registrar
Corpo da solicitação:
JSON
{
    "nome": "Nome do usuário",
    "email": "email@exemplo.com",
    "senha": "senha"
}
Use o código com cuidado. Saiba mais
Login:
Método: POST
URL: http://localhost:3000/login
Corpo da solicitação:
JSON
{
    "email": "email@exemplo.com",
    "senha": "senha"
}
Use o código com cuidado. Saiba mais
Resposta:
JSON
{
    "token": "token-de-acesso",
    "nome": "Nome do usuário"
}
Use o código com cuidado. Saiba mais
Verificação de usuário:
Método: POST
URL: http://localhost:3000/verificar
Corpo da solicitação:
JSON
{
    "token": "token-de-acesso"
}
Use o código com cuidado. Saiba mais
Resposta:
JSON
{
    "nome": "Nome do usuário"
}
Use o código com cuidado. Saiba mais
Observações:

A API não utiliza um banco de dados. Isso a torna mais flexível, pois permite que ela seja usada com qualquer banco de dados.
O nome de usuário e o token de acesso são exibidos na resposta da verificação de usuário por motivos de teste. Em um ambiente de produção, esses dados devem ser criptografados.

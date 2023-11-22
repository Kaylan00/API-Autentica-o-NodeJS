<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Logo Node.js" width="200" />
Uma api de autenticação com login, resgitro de usuário e criando token para cada usuário, feita com NodeJs puro!
Para testar a API bastar baixar o postman e seguir as regras descritas:

<h3>Fazer registro de usuário </h3>
<p>Para fazer registro de usuário nessa API e preciso utilizar o metodo POST com a seguinte url, http://localhost:3000/registrar </p>
<br>
<h3>Fazer registro de usuário </h3>
<p>Para fazer login de usuário nessa API e preciso utilizar o metodo POST com a seguinte url, http://localhost:3000/login.
O metodo post serve nada mais para criar um token para verificar se o usuário e válido!</p>
<br>
<h3>Fazer verficação/validação de usuário </h3>
<p>Para verificar se o usuário foi criado com sucesso, basta copiar o token que estará disponivel na saida do metodo login, a url de verificação é, http://localhost:3000/verificar, por fim mostrará o nome de usuário, evitei colocar senha por motivos de privacidade </p>

<h3> Observações: Não coloquei banco de dados ainda nessa API, para ela se tornar mais flexivel podendoa dicionar qualquer outro banco de dados,

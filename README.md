<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Logo Node.js" width="200" />
<br>
Uma api de autenticação com login, resgitro de usuário e criando token para cada usuário, feita com NodeJs puro!
Para testar a API bastar baixar o postman e seguir as regras descritas:

<h3>Fazer registro de usuário </h3>
<p>Para fazer registro de usuário nessa API e preciso utilizar o metodo POST com a seguinte url, http://localhost:3000/registrar </p>
<br>
<h3>Fazer login de usuário </h3>
<p>Para fazer login de usuário nessa API e preciso utilizar o metodo POST com a seguinte url, http://localhost:3000/login.
O metodo post serve nada mais para criar um token para verificar se o usuário e válido, ênfase que deve usar no header a Authorization e colocar o token como chave</p>
<br>
<h3>Fazer verficação/validação de usuário </h3>
<p>Para verificar se o usuário foi criado com sucesso, basta copiar o token que estará disponivel na saida do metodo login, a url de verificação é, http://localhost:3000/verificar, por fim mostrará o nome de usuário, evitei colocar senha por motivos de privacidade </p>

<h2>Observações</h2>
<ul>
  <li>A API não utiliza um banco de dados. Isso a torna mais flexível, pois permite que ela seja usada com qualquer banco de dados.</li>
  <li>O nome de usuário e o token de acesso são exibidos na resposta da verificação de usuário por motivos de teste. Em um ambiente de produção, esses dados devem ser criptografados.</li>
  <li>Em breve terá mais atualizações como por exemplo, o usuario podera trocar de senha ou nome de usuario, o dono da conta podera excluir o dados cadastrados, middleware de Autenticação e etc</li>
</ul>

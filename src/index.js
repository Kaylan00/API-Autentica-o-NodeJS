const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const usuários = []; // Estrutura de dados em memória para armazenar usuários

app.use(bodyParser.json());

// Registrar um novo usuário
app.post('/registrar', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifique se o usuário já existe
    const usuárioExistente = usuários.find(usuário => usuário.username === username);
    if (usuárioExistente) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const saltRounds = 10;
    const senhaHasheada = await bcrypt.hash(password, saltRounds);

    const novoUsuário = {
      username,
      password: senhaHasheada,
    };
    usuários.push(novoUsuário);

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
});

// Fazer login e obter token JWT
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const usuário = usuários.find(usuário => usuário.username === username);
    if (!usuário) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const passwordMatch = await bcrypt.compare(password, usuário.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const secretKey = 'secret';
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
});

app.get('/verificar', async (req, res) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Token JWT não fornecido' });
    }

    const secretKey = 'secret';
    const decodedToken = jwt.verify(token, secretKey);
    if (!decodedToken) {
      return res.status(401).json({ message: 'Token JWT inválido' });
    }

    const { username } = decodedToken;

    res.json({ message: 'Token JWT válido', user: { username } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao verificar token JWT' });
  }
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
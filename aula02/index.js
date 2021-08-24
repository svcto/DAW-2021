const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Olá mundo!')
});

app.get('/home', (req, res) => {
    const nome = req.query.nome;
    res.send('Seja bem vindo ' + nome + '!');
});

app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    res.send('Você está no perfil de ' + username + '!');
});
    
app.get('/login', (req, res) => {
    const user = req.body;
    const dados = {...req.body};

    console.log(user);

    res.send('Você está no perfil de ' + dados.username + '!');
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});

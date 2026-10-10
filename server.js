const app = require('./app');

const porta = 3000;

app.listen(porta, () => {
    console.log(`API rodando em http://localhost:${porta}`);
});

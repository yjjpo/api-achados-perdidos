# API REST - Achados e Perdidos

API simples feita com Node.js e Express, seguindo o modelo de dados em memória dos exercícios de aula.

## Como executar

1. Instale o Node.js e abra esta pasta no VS Code.
2. Abra o terminal dentro da pasta do projeto.
3. Execute:

   ```bash
   npm install
   npm start
   ```

4. O servidor ficará disponível em `http://localhost:3000`.

## Rotas

- `GET /objetos` — lista todos os objetos.
- `GET /objeto?id=1` — consulta um objeto pelo id.
- `POST /objeto` — cadastra um objeto. Envie `descricao`, `local`, `data` e `status` no corpo JSON.
- `PUT /objeto` — atualiza um objeto. Envie `id`, `descricao`, `local`, `data` e `status` no corpo JSON.
- `DELETE /objeto` — exclui um objeto. Envie `id` no corpo JSON.

## Exemplos de JSON

Cadastro (POST):

```json
{
  "descricao": "Mochila preta",
  "local": "Bloco B",
  "data": "2026-10-10",
  "status": "Encontrado"
}
```

Atualização (PUT):

```json
{
  "id": 1,
  "descricao": "Carteira preta",
  "local": "Recepção",
  "data": "2026-10-09",
  "status": "Devolvido"
}
```

Exclusão (DELETE):

```json
{
  "id": 1
}
```
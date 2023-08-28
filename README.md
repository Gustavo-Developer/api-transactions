# Backend

Criando Projeto

```bash
npm init -y
```

Instalando Dependencias

```bash
npm install
```

Criando Migrations

```bash
npm run -- knex migrate:make create-documents
```

Rodar Migrations

```bash
npm run knex migrate:latest
```

Desfazer Migrations

```bash
npm run knex migrate:rollback
```

Rodando Projeto

```bash
npm run dev
```

Rodando Testes

```bash
npm run test
```

Build

- Render
- Fly
- RailWay

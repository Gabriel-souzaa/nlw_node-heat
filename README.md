<div align="center">
  <h2>
    NLW Heat
  </h2>
</div>

<br>

### Sobre

- <p>Autenticação com o github (JWT)</p>
- <p>Listagem de usuário com base no github</p>

<br>

### Requerimentos

**Clone o repositório**

```bash
# git clone Repositório
$ git clone https://github.com/Gabriel-souzaa/nlw_node-heat.git
```

**Siga os passos**

```bash
# Instale as dependências
$ yarn

# Criar o aqruivo de variaveis do ambiente .env
$ touch .env

# O arquivo .env deve conter
GITHUB_CLIENT_SECRET=
GITHUB_CLIENT_ID=
JWT_SECRET=

#Migrações (tabelas do banco)
$ yarn prisma migrate dev

# inicie o projeto como dev
$ yarn dev
```

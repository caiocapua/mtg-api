<h2 align="center">
Backend Challenge 🏅 2022 - Covid Daily Cases
</h2>

## API Restful com Node.js, Express, Typescript, Postgres e Docker
Esse foi projeto foi desenvolvido uma REST API, que utiliza os históricos de casos de covid de um banco de dados e que permite visularizar
as informações de cada país através de uma data.


## Objetivo
Este desafio teve como objetivo desenvolver 4 rotas utilizando as melhores práticas de desenvolvimento, sendo elas:
```
[GET]/ -> Retornar um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases"
[GET]/cases/:date/count -> Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.
[GET]/cases/:date/cumulative -> Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo desde o início do dataset até a data selecionada, agrupados por país e separados por variante.
[GET]/cases/dates -> Listar as datas disponíveis no dataset
[POST]/upload -> Rota utilizada para subir o arquivo csv que contém os históricos de covid que irá fazer a inserção no banco de dados
```

## Técnologias utilizadas
Back-end:
```
Nodejs, ExpressJs, Postgres, Docker, SOLID, DDD, Redis, Typescript, Typeorm e Swagger
```


## Instalando as Dependências
Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

```
https://github.com/caiocapua/challenge-covid-daily-cases
```

Após clonar o conteúdo do repositório, acesse o diretório criado e efetue a instalação das dependências:

```
cd challenge-covid-daily-cases

yarn

# ou

npm install
```
## Executando aplicação
Rodandos os containers com docker compose
```
docker-compose up
```
Após a execução você poderá ter acesso a doc da API através da rota `http://localhost:3333/api-docs`

Link para acesso ao arquivo csv `https://challenges.coode.sh/covid/data/covid-variants.csv`


>  This is a challenge by [Coodesh](https://coodesh.com/)

## Apresentação

`https://www.loom.com/share/a264fb33751f4a698fa48a02a83fe332`
# MagicTheGathering
# MagicTheGathering
# MagicTheGathering
# apiMTG
# apiMTG
# mtg-api

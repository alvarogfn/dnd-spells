# API restful das magias de D&D

## *get* /spells

* Não passar nenhum parametro query retorna todas as magias.
* Todos os campos podem ser filtrados pela query. Será retornada a lista de magias que atender a todos os campos.

### Exemplo

Filtrar magia que contém pele no material, criatura na descrição e nível igual a 3.

`GET /spells?materials=pele&description=criatura1&level=3`
`GET /spells?materials=pele&description=criatura1&level=3`

## *get* /spell/:id

Retorna uma mágia especificada pelo ID.

`GET /spell/1`

## *get* /search/spells?s=

* Retorna qualquer magia que contenha o texto especificado no parametro query `s` em qualquer um dos seus campos.
* Se não passado, retorna todas as mágias.

`GET /spell/1`

## Exemplo de Objeto Retornado

| Chave         | Tipo           |
| -------------|:--------------:|
| materials     | string         |
| description   | string         |
| duration      | string         |
| components    | string[]       |
| id            | number         |
| range         | string         |
| casting_time  | string         |
| type          | string         |
| name          | string         |
| level         | number         |

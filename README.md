# Frontend - UP Restaurante

## O que é este projeto?

Este projeto é a criação de um ambiente intuitivo listando os produtos mais vendidos e possibilitando a fácil inserção desses no checkout para um restaurante a fim de subtituir o processo atual realizado por comanda mais rápido e fácil para seus clientes.

## Resumo

Para atender o objetivo do projeto foram criadas 3 rotas com react-router-dom: uma voltada para a interface do cliente para fazer o seu pedido ao restaurante, uma com o status de pedido enviado para a cozinha e a última com todos os pedidos realizados para a cozinha inicar o preparo. As três páginas foram construídas em React utilizando o comando create-react-app.
As páginas forma estilizadas com Styled Components para componentizar o CSS, foi utilizado o axios para realizar request ao backend de forma assíncrona.

## Organização das pastas do projeto

- assets: Para arquivos estáticos.
- components: Armazena componentes padronizados reutilizados em toda a aplicação.
- pages: Páginas principais da aplicação. Uma para cada rota.
- service: Interação com aplicação externa neste caso o Backend.
- styles: Armazena a estilização global da aplicação.

## O que ele faz?

É a inteface do usuário para realizar pedidos do cardápio de um restaurante e para a cozinha receber todos os pedidos que serão preparados por ela.

## Como executar?

Abra um terminal na pasta projeto e execute:

```bash
$ yarn install
$ yarn start
```

Em seguida abra no navegador o endereço `http://localhost:3000`
Obs: O [Backend](https://github.com/eliriamirna/up-restaurante-backend) precisa estar rodando.

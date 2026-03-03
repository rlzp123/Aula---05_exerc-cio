let categorias = [
    { id: 1, nome: "Salgados", },
    { id: 2, nome: "Bebidas", },
    { id: 3, nome: "Doces" },
];

let produtos = [
    {
        categoriaId: 1,
        nome: "DINER BURGUER",
        descricao: "Burguer, queijo, bacon crocante, molho da Lua, crispy onion, barbecue, alface à julienne e tomate",
        preco: 46.90,
        imagem: "./img/diner-burguer.png"
    },
    {
        categoriaId: 1,
        nome: "JAMES DEAN BACON",
        descricao: "Burguer, queijo, farofa de bacon, creme de cebola Lua e maionese artesanal",
        preco: 44.90,
        imagem: "./img/james-dean-bacon.png"
    },
    {
        categoriaId: 1,
        nome: "LUA BURGUER",
        descricao: "Burguer, 2 queijos (prato e cheddar), picles, bacon crocante e cebola roxa",
        preco: 29.90,
        imagem: "./img/lua-burguer.png"
    },
    {
        categoriaId: 2,
        nome: "LUA JUICE",
        descricao: "Suco de laranja com morango",
        preco: 19.90,
        imagem: "./img/l-com-m.png"
    },
    {
        categoriaId: 2,
        nome: "ITUBAÍNA RETRÔ",
        descricao: "Itubaína retrô",
        preco: 9.90,
        imagem: "./img/itubaína.png"
    },
    {
        categoriaId: 2,
        nome: "ÀGUA",
        descricao: "Com ou sem gás",
        preco: 8.90,
        imagem: "./img/agua.png"
    },
    {
        categoriaId: 3,
        nome: "PETIT GATEU",
        descricao: "O único que tem prato banhado com a mesma caldad entro do bolinho",
        preco: 36.90,
        imagem: "./img/bolinho.png"
    },
    {
        categoriaId: 3,
        nome: "WAFFLE NUTELLA",
        descricao: "Waffle com sorvete de creme, ovomaltine e nutella",
        preco: 35.90,
        imagem: "./img/waffle.jpg"
    },
    {
        categoriaId: 3,
        nome: "BANANA SPLIT",
        descricao: "3 bolas de sorvete, coberturas, chantilly, banana, tubetes, farofamix de castanha de caju e amendoim e cereja",
        preco: 55.90,
        imagem: "./img/banana.jpg"
    },
];

module.exports = { categorias, produtos };
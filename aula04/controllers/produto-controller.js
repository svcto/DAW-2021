const produtos = [
    {
        id: 1,
        nome: 'suco de laranja',
        litros: 0.5,
        preco: 3
    },
    {
        id: 2,
        nome: 'suco de uva',
        litros: 0.72,
        preco: 5
    },
    {
        id: 3,
        nome: 'suco de abacaxi',
        litros: 1,
        preco: 7
    }
];


module.exports = {
    index: (req, res) => {
        return res.json(produtos)
    },
    show: (req, res) => {
        const id = req.params.id;
        res.send(produtos.find(p => p.id == id));
    },
    create: (req, res) => {
        const produto = req.body;
        produtos.push(produto);
        res.send(produto);
    }
}
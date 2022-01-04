const PRODUCTS = [
    {
        id: 100,
        name: 'POLERA PIQUE MANGA CORTA NEGRA 60%/40%',
        price: 8500,
        image: require('../assets/products/Polera_pique.jpg'),
        description: 'Polera Pique con manga corta de material 60% algodón y 40% polyester.'
    },
    {
        id: 101,
        name: 'POLERA POLO MANGA LARGA',
        price: 6990,
        image: require('../assets/products/polera_polo_azulmarino.jpg'),
        description: 'Polera Polo con manga larga de material 80% algodón y 20% polyester.'
    },
    {
        id: 102,
        name: 'OVEROLES POPLIN CON REFLECTANTE',
        price: 8600,
        image: require('../assets/products/overol-poplin-con-reflectante-colores.jpg'),
        description: 'Overol Poplin con Reflectante de material 100% polyester.'
    },
    {
        id: 103,
        name: 'CHALECO GEOLOGO GABARDINA',
        price: 9700,
        image: require('../assets/products/chaleco geologo poplin.png'),
        description: 'Chaleco Geólogo Gabardina de material 100% polyester y cintura ajustable.'},
   
    {
        id: 104,
        name: 'POLERA PIQUE MANGA CORTA',
        price: 8990,
        image: require('../assets/products/Polera_pique.jpg'),
        description: 'Polera Pique con manga corta de material 80% algodón y 20% polyester.'
        },
    {
        id: 105,
        name: 'POLERA PIQUE MANGA LARGA',
        price: 8990,
        image: require('../assets/products/POLERA PIQUE MANGA LARGA.jpg'),
        description: 'Polera Pique con manga larga de material 80% algodón y 20% polyester.'
    },
    {
        id: 106,
        name: 'PANTALÓN CARGO GABARDINA',
        price: 9990,
        image: require('../assets/products/pantalon_cargo-Gabardina.jpg'),
        description:'Pantalón Cargo Gabardina de material 100% polyester elasticado en la cintura.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}
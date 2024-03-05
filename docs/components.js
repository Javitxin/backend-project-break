module.exports = {
    components: {
        schemas: {
            Product: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: 'Product identification number',
                        example: '6201064b0028de7866e2b2c4'
                    },
                    name: {
                        type: 'string',
                        description: 'Product description',
                        example: 'Pantalones de tienda',
                    },
                    description: {
                        type: 'string',
                        description: 'Product description',
                        example: 'Pantalones de tienda'
                    },
                    image: {
                        type: 'string',
                        description: 'URL to image ',
                        example: 'https://cdn.pixabay.com/photo/2017/02/16/02/31/no-money-2070384_960_720.jpg 1x, https://cdn.pixabay.com/photo/2017/02/16/02/31/no-money-2070384_1280.jpg'
                    },
                    category: {
                        type: 'string',
                        description: 'Product category',
                        example: 'Camisetas'
                    },
                    size: {
                        type: 'string',
                        description: 'Product size',
                        example: 'S'
                    },
                    price: {
                        type: 'string',
                        description: 'Product price',
                        example: '20'
                    },

                },
            },
            ProductPut: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Product description',
                        example: 'Pantalones de tienda',
                    },
                    description: {
                        type: 'string',
                        description: 'Product description',
                        example: 'Pantalones de tienda'
                    },
                    image: {
                        type: 'string',
                        description: 'URL to image ',
                        example: 'https://cdn.pixabay.com/photo/2017/02/16/02/31/no-money-2070384_960_720.jpg 1x, https://cdn.pixabay.com/photo/2017/02/16/02/31/no-money-2070384_1280.jpg'
                    },
                    category: {
                        type: 'string',
                        description: 'Product category',
                        example: 'Camisetas, Pantalones, Zapatos, Accesorios'
                    },
                    size: {
                        type: 'string',
                        description: 'Product size',
                        example: 'Xl, L, M, S'
                    },
                    price: {
                        type: 'string',
                        description: 'Product price',
                        example: '20'
                    },
                },

            },
            ProductPost: {
                type: 'obect',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Product description',
                        example: 'Pantalones de tienda',
                    },
                    description: {
                        type: 'string',
                        description: 'Product description',
                        example: 'Pantalones de tienda'
                    },
                    image: {
                        type: 'string',
                        description: 'URL to image ',
                        example: 'https://cdn.pixabay.com/photo/2017/02/16/02/31/no-money-2070384_960_720.jpg 1x, https://cdn.pixabay.com/photo/2017/02/16/02/31/no-money-2070384_1280.jpg'
                    },
                    category: {
                        type: 'string',
                        description: 'Product category',
                        example: 'Camisetas, Pantalones, Zapatos, Accesorios'
                    },
                    size: {
                        type: 'string',
                        description: 'Product size',
                        example: 'Xl, L, M, S'
                    },
                    price: {
                        type: 'string',
                        description: 'Product price',
                        example: '20'
                    },
                },
            },
            _id: {
                type: 'objectId',
                description: 'An id of a product',
                example: 'Introduce id',
            },
        },
    },
};
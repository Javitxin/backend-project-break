module.exports = {
    paths: {
        '/api/products': {
            get: {
                tags: {
                    Tasks: 'Mostrar todos los productos en API',
                },
                description: 'Mostrar todos los productos en API',
                operationId: 'showProductsAPI',
                parameters: [],
                responses: {
                    200: {
                        description: 'Productos obtenidos en API',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Product',
                                },
                            },
                        },
                    },
                },
                responses: {
                    500: {
                        description: 'Servidor no encontrado',
                    },
                },
            }
        }, '/api/dashboard': {
            post: {
                tags: {
                    Tasks: 'Crear un nuevo producto API',
                },
                descriptionId: 'createProductAPI',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/ProductsPost',
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: 'Nuevo producto creado'
                    },
                    500: {
                        description: 'Servidor no encontrado',
                    },
                },
            },
        }, 'api/dashboard/{_id}'{
            put: {
                tags: {
                    Tasks: 'Actualizar un producto en API',
                },
                description: 'Actualizar un producto en API',
                operationId: 'updateProductApi',
                parameters: [
                    {
                        name: '_id',
                        in: 'path',
                        schema: {
                            $ref: '#/components/schemas/_id',
                        },
                        description: 'Id del producto a actualizar',
                    },
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                #ref: '#components/schema/ProductPut'
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Producto actualizado correctamente'
                    },
                    500: {
                        description: 'Servidor no encontrado'
                    },
                },
            },
            delete: {
                tags: {
                    Taks: 'Eliminar Producto',
                },
                description: 'Eliminar producto',
                operationId: 'deleteProductApi',
                parameters: [
                    {
                        name: '_id',
                        in: 'path',
                        schema: {
                            $ref: '#/components/schemas/_id',
                        },
                        description: 'Id del prodecto a eliminar',
                    },
                ],
                responses: {
                    200: {
                        description: 'Producto eliminado'
                    },
                    500: {
                        description: 'Servidor no encontrado'
                    },
                },
            }
        },
    },
}
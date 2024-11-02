import { describe } from 'node:test';
import swaggerjsdoc from 'swagger-jsdoc';


const swaggerOptions = {
    definition: {
        openapi: '3.1.1',
        info: {
            title: 'Book storefront API',
            version: '1.0.0',
            description: 'API handles Books, AUthors and users for a store',
        },
        components: {
            schemas: {
                Book: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        title: {
                            type: 'string',
                            example: 'Starship Troopers',
                        },
                        author: {
                            type: 'string',
                            example: 'Robert A. Heinlein',
                        },
                        publicationDate: {
                            type: 'string',
                            format: 'date',
                            example: '1959-11-05',
                        },
                        isbn: {
                            type: 'string',
                            example: '978-0450044496',
                        },
                    },
                },
                Author: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        name: {
                            type: 'string',
                            example: 'Robert A. Heinlein',
                        },
                        books: {
                            type: 'array',
                            items: {
                                type: 'integer',
                            },
                            example: [1, 2],
                        },
                        biography: {
                            type: 'string',
                            example: 'Robert Anson Heinlein was an American science fiction author',
                        },
                    },
                },
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        name: {
                            type: 'string',
                            example: 'John Doe',
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            example: 'john.doe@example.com',
                        },
                        purchasedBooks: {
                            type: 'array',
                            items: {
                                type: 'integer',
                            },
                            example: [1, 2],
                        },
                    },
                },
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes.*.ts'],
};

export const swaggerDocs = swaggerjsdoc(swaggerOptions);
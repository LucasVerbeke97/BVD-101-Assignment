import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './swaggerconfig';
import bodyParser from 'body-parser';

import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/authorRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/users', userRoutes);

console.log("Server running: http://localhost:3000");
console.log("Swagger UI: http://localhost:3000/api-docs");
app.listen(3000);

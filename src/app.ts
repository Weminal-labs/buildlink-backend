import postRouter from "./routes/api";

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Buildinks API",
      version: "1.0.0",
      description: "Docs for Buildlink API",
    },
    servers: [
      {
        url: "localhost:3000",
      },
    ],
  },

  apis: ["./routes/*.js"],

};

const swaggerDocs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/answer', postRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
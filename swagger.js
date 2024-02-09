const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Sour Dough API',
    description: 'This is where all recipes are held.'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);
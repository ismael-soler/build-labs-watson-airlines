const swagger_autogen = require('swagger-autogen')({ openapi: '3.0.0' });

const mongo_specs = {
  Flight: {
    type: 'object',
    tags: ['Flight'],
    properties: {
      AIRLINE: {
        type: 'string'
      },
      FLIGHT_NUMBER: {
        type: 'number'
      },
      ORIGIN_AIRPORT: {
        type: 'string'
      },
      DESTINATION_AIRPORT: {
        type: 'string'
      },
      CANCELLED: {
        type: 'boolean'
      },
      DEPARTURE_DATE: {
        type: 'date'
      },
      ARRIVAL_DATE: {
        type: 'date'
      }
    }
  },
  AIRPORT: {
    tags: ['Airport'],
    type: 'object',
    properties: {
      IATA_CODE: {
        type: 'string'
      },
      AIRPORT: {
        type: 'string'
      },
      CITY: {
        type: 'string'
      },
      STATE: {
        type: 'string'
      },
      COUNTRY: {
        type: 'string'
      }
    }
  }
};

const general_specs = {
  info: {
    title: 'Watson Airlines Customer Experience',
    description: 'REST API to retrieve Watson Airlines ',
    contact: {
      name: 'Ismael Soler',
      email: 'ismaelsolerferreira@gmail.com'
    },
    version: '1.0.0'
  },
  servers: [
    //{
    //  url: 'http://localhost:3000',
    //  description: 'Local server'
    //},
    {
      url: 'https://watson-airlines-api-mvp.146zmxftsk49.us-south.codeengine.appdomain.cloud',
      description: 'Watson API'
    }
  ],
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  security: [],
  components: {
    schemas: mongo_specs
  },
};

// API Routes
const api_routes = [
  './app.js'
];

// Output file path
const output_file_path = './swagger_output.json';

// Generate OpenAPI specs
swagger_autogen(
  (outputFile = output_file_path),
  (endpointsFile = api_routes),
  (data = general_specs)
);

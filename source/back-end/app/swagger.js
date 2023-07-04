const swagger_autogen = require('swagger-autogen')({ openapi: '3.0.0' });

// schemas
const mongo_specs = {
  Flight: {
    _id: '63e53b3d123da255099f26bc',
    AIRLINE: 'US',
    FLIGHT_NUMBER: 840,
    ORIGIN_AIRPORT: 'SFO',
    DESTINATION_AIRPORT: 'CLT',
    CANCELLED: true,
    DEPARTURE_DATE: '2023-01-01T03:20:00.000Z',
    ARRIVAL_DATE: '2023-01-01T11:06:00.000Z'
  },
  Airport: {
    _id: '63dd87f9fd4b3618756969ce',
    IATA_CODE: 'AMA',
    AIRPORT: 'Rick Husband Amarillo International Airport',
    CITY: 'Amarillo',
    STATE: 'TX',
    COUNTRY: 'USA'
  },
  Airline: {
    _id: '63dd87e1fd4b3618756969b3',
    IATA_CODE: 'US',
    AIRLINE: 'US Airways Inc.'
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
    // {
    //  url: 'http://localhost:3000',
    //  description: 'Local server'
    // },
    {
      url: 'https://watson-airlines-api.146zmxftsk49.us-south.codeengine.appdomain.cloud',
      description: 'Watson API'
    }
  ],
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  security: [],
  components: {
    schemas: mongo_specs
  }
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

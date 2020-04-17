require('dotenv').config();

const {
  GRAPHQL_URI,
} = process.env;

module.exports = {
  env: {
    GRAPHQL_URI,
  },
  experimental: {
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  }
};

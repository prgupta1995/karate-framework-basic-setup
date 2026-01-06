function fn() {
  // get system property 'karate.env', default to 'dev'
  var env = karate.env || 'dev'; 
  karate.log('Running tests in environment:', env);

  // default configuration
  var config = {
    baseUrl: 'https://jsonplaceholder.typicode.com', // base URL for API
    usersPath: '/users', // common path for users
    authToken: '' // placeholder for auth if needed in future
  };

  // environment-specific overrides
  if (env === 'qa') {
    config.baseUrl = 'https://jsonplaceholder.typicode.com'; // can change if QA URL differs
  } else if (env === 'dev') {
    config.baseUrl = 'https://jsonplaceholder.typicode.com'; // default dev URL
  }

  return config;
}
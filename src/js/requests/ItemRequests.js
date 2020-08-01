const axios = require('axios');
import config from '../util/config'

// Need to use axios and setItems to set the items in the array

const getItems = function() {

  return axios.get(config.getItemsEndpoint)

};

export { getItems }
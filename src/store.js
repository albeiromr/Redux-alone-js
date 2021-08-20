const createStore = require("redux").createStore;
const productReducer = require("./reducers");

const store = createStore(productReducer);

module.exports = store;
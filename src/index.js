const store = require("./store");
const buyProduct = require("./actions");


console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

// actualizando el state cuando compramos un producto
store.dispatch(buyProduct(9));
store.dispatch(buyProduct(2));
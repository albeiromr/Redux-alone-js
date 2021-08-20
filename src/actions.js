const buyProduct = (quantity) => {
  return {
    type: "buy product",
    payload: quantity,
  };
};

module.exports = buyProduct;

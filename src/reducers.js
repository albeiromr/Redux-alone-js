const productState = {
  totalProducts: 40,
  toSell: 20,
  toReturn: 20,
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case "buy product":
      return {
        ...state,
        totalProducts: state.totalProducts -= action.payload,
        toSell: state.toSell -= action.payload
      };
    default:
      return productState;
  }
};

module.exports = productReducer;

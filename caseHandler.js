const api = require('./api');

exports.caseInfo = async (args) => {
  try {
    const gamePlain = await api.getGamePlain(args.join(' '));
    const gameInfo = await api.getGameInfo(gamePlain);
    return gameInfo;
  } catch(err) {
    return err;
  }
};

exports.caseDeals = async (sort = 'price:asc', limit = 5) => {
  try {
    const gameDeals = await api.getGameDeals(sort, limit);
    return gameDeals.data.list;
  } catch(err) {
    return err;
  }
};

exports.caseLowestPrice = async (args) => {
  try {
    const gamePlain = await api.getGamePlain(args.join(' '));
    const lowestPrice = await api.getStoreLow(gamePlain);
    return lowestPrice.data;
  } catch(err) {
    return err;
  }
};

exports.casePrice = async (args) => {
  try {
    const gamePlain = await api.getGamePlain(args.join(' '));
    const price = await api.getCurrentPrice(gamePlain);
    return price.data;
  } catch(err) {
    return err;
  }
};

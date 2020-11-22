require('dotenv').config({path: './config.env'});
const axios = require('axios');
const steamprice = require('steam-price-api');
const webdriver = require('selenium-webdriver');

const baseURL = 'https://api.isthereanydeal.com';

exports.getGamePlain = async gameTitle => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(`${baseURL}/v02/game/plain`, {
        params: {
          key: process.env.DEALS_API_KEY,
          shop: 'steam',
          title: gameTitle
        }
      });
      resolve(data.data.data.plain);
    } catch(err) {
      reject(err);
    }
  });
};

exports.getGameInfo = async gamePlain => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(`${baseURL}/v01/game/info`, {
        params: {
          key: process.env.DEALS_API_KEY,
          plains: gamePlain
        }
      });
      resolve(data.data);
    } catch(err) {
      reject(err);
    }
  });
};

exports.getGameDeals = async (limit, sort)  => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(`${baseURL}/v01/deals/list`, {
        params: {
          key: process.env.DEALS_API_KEY,
          limit: limit,
          country: 'IN',
          shops: 'steam',
          sort: `price:${sort}`
        }
      });
      resolve(data.data);
    } catch(err) {
      reject(err);
    }
  });
};

exports.getStoreLow = async gamePlain => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(`${baseURL}/v01/game/storelow`, {
        params: {
          key: process.env.DEALS_API_KEY,
          plains: gamePlain,
          country: 'IN',
          shops: 'steam'
        }
      });
      resolve(data.data);
    } catch(err) {
      reject(err);
    }
  });
};

exports.getCurrentPrice = async gamePlain => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(`${baseURL}/v01/game/prices`, {
        params: {
          key: process.env.DEALS_API_KEY,
          plains: gamePlain,
          country: 'IN',
          shops: 'steam'
        }
      });
      resolve(data.data);
    } catch(err) {
      reject(err);
    }
  });
};

exports.getNextSteamSale = async () => {
  const site = `https://www.whenisthenextsteamsale.com/`;
  return new Promise(async (resolve, reject) => {
    try {
      let driver = await new webdriver.Builder().forBrowser('chrome').build();
      await driver.get(site);
      const el = await driver.findElement(webdriver.By.id('saleDate'));
      const text = await el.getText();
      await driver.quit();
      resolve(text);
    } catch(err) {
      reject(err);
    }
  });
};

exports.getItemPrice = async (appID, itemName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await steamprice.getprice(appID, itemName, '1');
      resolve(data);
    } catch(err) {
      reject(err);
    }
  });
};

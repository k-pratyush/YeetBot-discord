require('dotenv').config({path: './config.env'});
const { promisify } = require("util");
const redis = require('redis');
const axios = require('axios');

const client = redis.createClient();

const getAsync = promisify(client.get);
const setAsync = promisify(client.set);


client.on("error", function(error) {
  console.error(error);
});

const cacheAppIDMap = async () => {
  const baseURL = 'https://api.isthereanydeal.com';

  try {
    const resp = await axios.get(`${baseURL}/v01/game/map`, {
      params: {
        key: process.env.DEALS_API_KEY,
        shop: 'steam'
      }
    });
    console.log(resp.data);
  } catch(err) {
    console.log(err);
  }
  
};

cacheAppIDMap();

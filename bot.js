require('dotenv').config({path: './config.env'});
const Discord = require('discord.js');
const caseHandler = require('./caseHandler');
const table = require('./table_help');

const client = new Discord.Client();

const PREFIX = '~'

client.on('ready', () => {
  // TODO redis caching for game ids -> game plains
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on('message', msg => {
  if(msg.content.startsWith(PREFIX)) {
    const [command, ...args] = msg.content.trim().substring(PREFIX.length).split(' ');

    switch(command) {
      case 'info':
        if(args[0] === undefined) {
          msg.reply('~info requires an argument <game_name>');
        } else {
          caseHandler.caseInfo(args).then(data => {
            console.log(data);
            msg.reply(JSON.stringify(data));
          });
        }
        break;
      
      case 'deals':
        caseHandler.caseDeals(args[0], args[1])
          .then(data => {
            console.log(data);
            msg.reply(JSON.stringify(data));
          });
        break;

      case 'lowestPrice':
        if(args[0] === undefined) {
          msg.reply('~lowestPrice requires an argument <game_name>');
        } else {
          caseHandler.caseLowestPrice(args)
            .then(data => {
              console.log(data)
              msg.reply(JSON.stringify(data));
            });
        }
        break;

      case 'price':
        if(args[0] === undefined) {
          msg.reply('~price requires an argument <game_name>');
        } else {
          caseHandler.casePrice(args)
            .then(data => {
              console.log(data);
              msg.reply(JSON.stringify(data));
            });
        }
        break;
      
      case 'help':
        console.log(table);
        msg.reply(table);
        break;

      default:
        break;
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

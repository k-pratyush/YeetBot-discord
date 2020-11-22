require('dotenv').config({path: './config.env'});

const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '~'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on('message', msg => {
  if(msg.content.startsWith(PREFIX)) {
    const [command, ...args] = msg.content.trim().substring(PREFIX.length).split(' ');
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

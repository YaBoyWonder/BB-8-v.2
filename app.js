const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const commando = require('discord.js-commando');
const { oneLine } = require('common-tags');
const path = require('path');
const winston = require('winston');
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
    fs.readdir('./commands/', (err, files) => {
      if (err) console.error(err);
        log(`Loading a total of ${files.length} commands.`);
          files.forEach(f => {
        let props = require(`./commands/${f}`);
      log(`Loading Command: ${props.help.name}. 👌`);
   client.commands.set(props.help.name, props);
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.util = {
   embed: require('../util/embed'),
   fetchStats: require('../util/fetchStats')(client),
    isStaff: require('../util/isStaff')
}

client.elevation = message => {

};


client.login(settings.token);

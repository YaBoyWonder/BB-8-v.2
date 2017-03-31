"use strict";

const Discord = require('discord.js');
const settings = require('./settings.json');
const ddiff = require('return-deep-diff');
const client = new Discord.Client({fetchAllMembers: true})
const wonder = "138431969418543104";
const moment = require("moment");
require("moment-duration-format");
const fs = require("fs");
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
const db = require("sqlite");
db.open("./selfbot.sqlite");
client.settings = settings;
client.db = db;
require('./util/eventLoader')(client);


/**********************************************************************/
var Cleverbot = require("cleverbot-node");
 var cleverbot = new Cleverbot;
var things = ["Yes", "No", "In the near future", "Possibly","Meh", "Maybe", "Sure, why not"];

/**********************************************************************/

var reload = (message, cmd) => {
	if(message.author.id !== "YOUR_DISCORD_ID") return;
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
			response => response.delete(1000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.sendMessage(`${cmd} reload was a success!`).then(
		response => response.delete(1000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};
exports.reload = reload;



/**********************************************************************/


function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


client.login(settings.token);

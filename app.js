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
const schedule = require('node-schedule');
const date = require('date.js');
const request = require('request');
const rp = require('request-promise-native');
const numeral = require('numeral');
require('./util/eventLoader')(client);


/**********************************************************************/
var Cleverbot = require("cleverbot-node");
var cleverbot = new Cleverbot;
var things = ["Yes", "No", "In the near future", "Possibly","Meh", "Maybe", "Sure, why not"];

/**********************************************************************/

client.on("guildCreate", guild => {
		client.channels.get('256929247325716482').sendMessage("", {embed: {
			color: 0x90BDF4,
			title: "I've been invited to server **" + guild.name + "**\nServer ID: **" + guild.id + "**\nRegion: **" + guild.region + "**",
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: '©BB-8'
			}
		}});
});

client.on("guildDelete", guild => {
		client.channels.get('256929247325716482').sendMessage("", {embed: {
			color: 0xFF0101,
			title: "I've been removed from server **" + guild.name + "**",
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: '©BB-8'
			}
		}});
});


client.on("guildMemberAdd", member => {
	if (member.guild.id !== '174991160274583552') return;
		client.channels.get('264519228613328912').sendMessage("", {embed: {
			color: 0x57FBCA,
			title: 'Welcome to our guild' + " " + member.user.username + '!',
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: '©BB-8'
			}
		}});
});

client.on("guildMemberRemove", member => {
	if (member.guild.id !== '174991160274583552') return;
		client.channels.get('264519228613328912').sendMessage("", {embed: {
			color: 0xFC2F2F,
			title: member.user.username + " " + "has left",
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: '©BB-8'
			}
		}});
});

var reload = (message, cmd) => {
	if(message.author.id !== "138431969418543104") return;
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

this.util = {

      isStaff: require('./util/isStaff')
    
    };



/**********************************************************************/
//var prefix = "bb"

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


client.login(settings.token);

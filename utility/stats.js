const { Command } = require('discord.js-commando');
const moment = require('moment');
require('moment-duration-format');
const { stripIndents } = require('common-tags');


module.exports = class StatsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stats',
			aliases: ['statistics'],
			group: 'util',
			memberName: 'stats',
			description: 'Displays statistics about BB-8.',
			guildOnly: true,
			throttling: {
				usages: 2,
				duration: 3
			}
		});
	}

	run(message) {
		return message.embed({
			color: 0x6B2BE2,
			description: '**Nitro Statistics**',
			fields: [
				{
					name: '-Uptime',
					value: moment.duration(this.client.uptime)
						.format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]'),
					inline: true
				},
				{
					name: '-Memory usage',
					value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
					inline: true
				},
				{
					name: '-General Stats',
					value: stripIndents`
					• Guilds: ${this.client.guilds.size}
					• Channels: ${this.client.channels.size}
					• Users: ${this.client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}
					`,
					inline: true
				}
			],
			thumbnail: { url: this.client.user.avatarURL }
		});
	}
};

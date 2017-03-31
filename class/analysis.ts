import { Message } from 'discord.js';


const client = new CommandoClient({
	unknownCommandResponse: true
});

exports.run = function(client, message, args) {

		message.channel.sendMessage('test');
	
});

	public hasPermission(message: CommandMessage): boolean {
		return true;
	}

	public async run(message: CommandMessage, args: {} | string | string[]): Promise<Message | Message[]> {
		return message.say('test');
	}
}


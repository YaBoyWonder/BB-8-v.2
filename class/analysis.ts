import { Message } from 'discord.js';
const client = new CommandClient({
unknownCommandResponse: true
});
exports.run = function(client, message, args) {
  message.channel.sendMessage('BB-8 is online and ready to function');	
});   
   public hasPermission(message: CommandMessage): boolean {
		  return true;
	}  
	    public async run(message: CommandMessage, args: {} | string | string[]): Promise<Message | Message[]> {
		return message.say('Test Online');
	}
}


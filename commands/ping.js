exports.run = function(client, message, args) {
  message.channel.sendMessage("", {embed: {
      color: 0x3FF2C8,
      title: `Pong! \`${Date.now() - message.createdTimestamp} ms\``,
     
    }});
};

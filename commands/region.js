exports.run = function(client, message, args) {
  message.channel.sendMessage("", {embed: {
    color: 3447003,
    title: message.guild.region,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '©BB-8'
    }
  }});
}

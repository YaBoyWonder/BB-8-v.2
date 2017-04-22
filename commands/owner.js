exports.run = function(client, message, args) {
  message.channel.sendMessage("", {embed: {
    color: 3447003,
    title: message.guild.owner.user.username,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Wonder ❤'
    }
  }});
}

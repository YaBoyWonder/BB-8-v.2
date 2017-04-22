exports.run = function(client, message, args) {
  message.channel.sendMessage("", {embed: {
    color: 0x00FF7F,
    title: message.guild.memberCount,
      footer: {
      icon_url: client.user.avatarURL,
      text: 'Wonder ❤'
    }
  }});
}

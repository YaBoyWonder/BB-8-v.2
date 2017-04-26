exports.run = function(client, message, args) {
  let coin = ["Heads!", "Tails!"];
  message.reply(coin[Math.floor(Math.random() * coin.length)]).catch(console.error);
}

const suits = ['♠️', '♦', '♥️', '♠️'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

exports.run = (client, message, args) => {
  const numCards = args === undefined ? 1 : args;

  if (numCards < 1 || numCards > 10) {
    message.channel.sendMessage('Number of cards should be between 1 and 10.');

    return;
  }

  const lines = [];

  for (let i = 0; i < numCards; ++i) {
    lines.push(`**${ranks[Math.floor(Math.random() * ranks.length)]}**${suits[Math.floor(Math.random() * suits.length)]}`);
  }

  message.channel.sendMessage(lines.join(', '));
};
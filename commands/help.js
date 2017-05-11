  message.author.sendMessage("", {embed: {
 color: 0xFCEFEC,
 author: {
   name: client.user.username,
   icon_url: client.user.avatarURL
 },
fields: [
{
 name: "members",
 value: `shows the amnt. of members in the guild`,
 inline: true
 },
{
name: "owner",
value: `shows the owner of the guild`,
inline: true
},
{
name: "ping",
value: `returns ping in ms`,
inline: true
},
{
name: "coin",
value: `flips a coin for heads or tails`,
inline: true
},
{
name: "github",
value: `shows the developer's github acc.`,
inline: true
},
{
name: "quote",
value: `quote's a user's text msg`,
inline: true
},
{
 name: "region",
 value: `shows the region of the guild`,
 inline: true
},
 ]
}});

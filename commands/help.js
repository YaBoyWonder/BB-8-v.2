  msg.author.sendMessage("", {embed: {
 color: 0x6FED40,
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
 name: "region",
 value: `shows the region of the guild`,
 inline: true
},
]
}});

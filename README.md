![Banner](https://i.ytimg.com/vi/QSn6sW1v2fw/maxresdefault.jpg)
<br>
---
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)
![Language](https://img.shields.io/badge/language-javascript-orange.svg?style=flat-square)
![Downloads](https://img.shields.io/badge/downloads-34-blue.svg?style=flat-square)
![Language](https://img.shields.io/badge/⭐-2-green.svg?style=social)
---
# BB-8-v.2

A Discord.js Bot I originally put into <a href="https://github.com/Gawdl3y/discord.js-commando/blob/master/README.md">Commando</a>, however I made this version so its easier for users to use

**Invite the bot<a href="https://discordapp.com/oauth2/authorize?client_id=251715073553203200&scope=bot&permissions=32014"> here</a>**



- using the lib <a href="https://discord.js.org/#/"  target="_blank"><strong>Discord.JS</strong></a>
- Version 2 of <a href="https://github.com/YaBoyWonder/BB-8-Bot">BB-8</a>


 [![](https://discordapp.com/api/guilds/304768817526210562/embed.png?style=banner2)](https://discord.gg/TsaGrwg)

**__Installation + Hosting Yourself__**



🚦 This bot requires <a href="https://nodejs.org/en/">Node.js 6.1.0</a> or higher.

  1. Download this file from<a href="https://github.com/YaBoyWonder/BB-8-v.2/releases/tag/v1.0.0"> here</a> for the latest version or download <a href="https://git-scm.com/downloads">git</a> and clone this repository
  2. Go get a `.sqlite` file, however rename it to say `bot.sqlite` once you have it
  3. Create a file called `settings.json` and put in the file this. Then *fill out* the info
  ```js
  {
	"prefix": "YOUR_BOT_PREFIX",
	"token" : "YOUR_BOT_TOKEN",
	"ownerID": "YOUR_DISCORD_ID"
}
```
 4. Go into the message file in the events folder, and when you find this line, edit to to have your bot's prefix aswell
 ```js
   var prefix = "YOUR_BOT_PREFIX"
   ```
 5. Open up a command prompt (or your preferred terminal) in the bot folder.
 6. Run `node app.js` 
 7. Its going to say stuff like `could not find moment dependency or something close to it`,<br> 
 so you then just run `npm install` plus the missing dependency<br>
 *Example*
 *`npm install discord.js`*
 8. Once you have downloaded everything, the next time you run `node app.js`, it should say<br>
 <!--<img align="right" height="260" src="http://i.imgur.com/Wna1Yrn.png"> -->
	`I'm Online and Ready to go`

And you should be all set from there!

**FAQ**

 - To add commands, just go into the `commands` folder and put your cmd into it like the ping cmd
 Just make sure to put it within this handler
 ```js
 exports.run = function(client, message, args) {

}
 ```
 *anything else your cmd requires just put it in the file*

 - To host while running <a href="http://pm2.keymetrics.io">pm2</a> 
 Just run `pm2 start app.js` in the bot file
 
 - If you have a command that requires args, you don't need to define it since it already is
 check the message handler in the events folder to see
 
- If you update/add a cmd, you dont need to restart the bot. Just reload the command

## COMMANDS
| Option        | Usage         |
| ------------- |---------------|
| ping           | sends user's ms |
| owner          | shows the owner of the guild              |
| members          | shows the amnt. of members in the guild             |
| region          | sends the region of the guild          |
| coin          | flips a coin (heads or tails)         |

*if any errors occur while trying to run the bot, comment them **here** and I will see to it shortly*

Wonder™ ツ#3350


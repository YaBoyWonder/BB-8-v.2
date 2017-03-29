
# BB-8-v.2

**Invite <a href="https://discordapp.com/oauth2/authorize?client_id=251715073553203200&scope=bot&permissions=32014">here</a>**


- using the lib <a href="https://discord.js.org/#/"  target="_blank"><strong>Discord.JS</strong></a>
- Version 2 of <a href="https://github.com/YaBoyWonder/BB-8-Bot">BB-8</a>

**__Installation + Hosting Yourself__**



This bot requires <a href="https://nodejs.org/en/">Node.js 7.0</a> or higher.

  1. Download this repository or download <a href="https://git-scm.com/downloads">git</a> and clone this repository.
  2. Go get a `.sqlite` file, however rename it to say `selfbot.sqlite` once you have it
  3. Create a file called `settings.json` and put in the file this. Then *fill out* the info
  ```js
  {
	"prefix": "YOUR_BOT_PREFIX",
	"token" : "YOUR_BOT_TOKEN",
	"ownerID": "YOUR_DISCORD_ID"
}
```

 4. Open up a command prompt (or your preferred terminal) in the bot folder.
 5. Run `node app.js` 
 6. Its going to say stuff like `could not find moment dependency or something close to it`,<br> 
 so you then just run `npm install` plus the missing dependency<br>
 *Example*
 *`npm install discord.js`*
 7. Once you have downloaded everything, the next time you run `node app.js`, it should say<br>
 <!--<img align="right" height="260" src="http://i.imgur.com/Wna1Yrn.png"> -->
	`I'm Online`<br>

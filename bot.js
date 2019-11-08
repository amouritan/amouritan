const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("642254843716698122")
setInterval(function() {
channel.send(`hi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
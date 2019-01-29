// Configuration
const config = {
	"prefix" : "!",
	"response" : {
		"marco" : "Polo!",
		"hei" : "Hei ;)",
		"why?" : "Why not?",
	},
	"commands" : {
		1 : {"name" : "!" + "cmds / " + "!" + "commands", "desc" : "Get a list of all commands"},
		2 : {"name" : "!" + "test", "desc" : "This is a test description"},
		3 : {"name" : "!" + "something", "desc" : "This is another test description :/"},
	}
}

// Main
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


client.on("message", message => {
	// Preset reponse
	const msg = message.content.toLowerCase()
	if (config.response[msg]) {
		message.channel.send(config.response[msg])
	}
	// Commands
	if (message.content.toLowerCase() == (config.prefix + "cmds")) { //} or (message.content == "${config.prefix}commands") {
		console.log(config.prefix + "this")
		const embed = new Discord.RichEmbed()
			.setColor("#FFD700")
			.setTitle("Commands")
			.setDescription("Find a list of this bot's awesome commands below or [here](www.google.com)!")
		for (let info of config.commands) {
			embed.addField()
		}
		message.channel.send("Find a list of this bot's awesome commands below:" + embed)
	}
});

client.login('NTM5NDE3OTQ2OTEzNzY3NDM1.DzCOzw.NpdERgZn_y3xuNiNA-DYEZw88dU');

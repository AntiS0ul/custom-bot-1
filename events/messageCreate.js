const interactionCreate = require("./interactionCreate")
const {
	Client,
	Collection,
	Events,
	GatewayIntentBits,
	GuildExplicitContentFilter,
	Message,
	EmbedBuilder,
	REST,
	Routes,
	message,
	guild,
	GuildMember,
  } = require("discord.js");

module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message,client)  {
		if(message.author.bot == false){
		message.mentions.members.each(async member => {
			if (member.roles.cache.some(r=>['1043294647616815175'].includes(r.id))){
				if (message.member.roles.cache.some(r=>['1187210668051537990'].includes(r.id))){
						return
				} else {
					message.reply('Please do not mention staff.\nIf you need help, please make a ticket and we can help you there.')
					message.member.timeout(300000).catch(err => {
						if (err.content.startsWith('DiscordAPIError[50013]')){
							message.channel.send('<@798689472799309904> No perms!')
						}})
					}}})
					console.log('Attempted to mute ' + message.member.user.tag)

				}
}}
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
const role = message.guild.roles.cache.get('ROLE_ID_HERE')
    if(message.member.roles.cache.has('ROLE_ID_HERE')) return;
    else if(message.content.toLowerCase() === 'verify') {
           message.member.roles.add(role.id)
           message.delete();
           
    }

});

bot.login('BOT_TOKEN_HERE')

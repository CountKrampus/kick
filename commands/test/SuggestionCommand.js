const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class SuggestionCommand extends BaseCommand {
  constructor() {
    super('suggestion', 'test', ['suggest']);
  }

  async run(client, message, args) {
    let suggestion = args.join(' ');
    if (!args[0]) return message.channel.send('You must state a suggestion.');
  
  const embed = new Discord.MessageEmbed()
    .setTitle(`Suggestion`)
    .addField(`Suggestion: ${suggestion}`, `This was suggested by ${message.author.tag}.`)
    .setColor("#eb4034")
    .setTimestamp();

  message.channel.send(embed).then(sentMessage => sentMessage.react('👍')).then(reaction => reaction.message.react('👎'));
  }
}
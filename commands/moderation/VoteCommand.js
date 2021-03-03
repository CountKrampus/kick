const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VoteCommand extends BaseCommand {
  constructor() {
    super('vote', 'moderation', ['poll']);
  }

  async run(client, message, args) {
    const filter = m => m.author.id == message.author.id;

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to use this command.");
    let embed = new Discord.MessageEmbed()
      .setColor("#eb4034")
      .setFooter(`vote made by ${message.author.tag}`)
      .setTimestamp();

  message.channel.send('What is the topic?');
  try {
    let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    console.log(msg.first().content);
    embed.setTitle(msg.first().content);
  } catch (err) {
    console.log(err);
    message.channel.send('You ran out of time!');
  }
  
  message.channel.send('What is the first point to vote?');
  try {
    let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    console.log(msg.first().content);
    embed.addField(`[🔴] The first option to vote:`, msg.first().content);
  } catch (err) {
    console.log(err);
    message.channel.send('You ran out of time, re-run the command!');
  }

  message.channel.send('What is the second point to vote?');
  try {
    let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    console.log(msg.first().content);
    embed.addField(`[🟢] The second option to vote:`, msg.first().content);
  } catch (err) {
    console.log(err);
    message.channel.send('You ran out of time, re-run the command!');
  }

  message.channel.send(embed).then(sentMessage => sentMessage.react('🔴')).then(reaction => reaction.message.react('🟢'));
  }
}

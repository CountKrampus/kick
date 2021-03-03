const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ResendCommand extends BaseCommand {
  constructor() {
    super('resend', 'test', ['snipe']);
  }

  async run(client, message, args) {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send('There isnt a message to resend.');

    const resendEmbed = new Discord.MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setDescription(msg.content)
      .setColor("#eb4034")
      .setTimestamp();
    
    message.channel.send(resendEmbed);
  } catch (err) {
    console.log(err);
  }
}
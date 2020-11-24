const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PeekCommand extends BaseCommand {
  constructor() {
    super('peek', 'moderation', []);
  }

// Made peek an restricted command, just because i dont feel like everyone needs to know another persons userID

  run(client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to use this command.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have permission to use this command.");

    message.author.send(`Their Username: ${message.mentions.users.first().username}\nTheir ID: ${message.mentions.users.first().id}`);
  }
}
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PunchCommand extends BaseCommand {
  constructor() {
    super('punch', 'test', []);
  }

  run(client, message, args) {
  const mentionedMember = message.mentions.members.first();
  const userAuthor = message.author.toString()

   message.channel.send(`${userAuthor} has punched ${mentionedMember}`)
  }
}
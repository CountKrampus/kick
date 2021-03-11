const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'moderation', ['verification']);
  }

  async run(client, message, args) {
   if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I require \`MANAGE_ROLES\` permission.");

   const role = members.guild.roles.cache.get('818571734612443158');

   await member.roles.add(role.id).catch(err => console.log(err));
   message.author.send("Verified role added").catch(err => console.log(err));
   message.delete();
  }
}
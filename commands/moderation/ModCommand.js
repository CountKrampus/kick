const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ModCommand extends BaseCommand {
  constructor() {
    super('mod', 'moderation', []);
  }

  async run(client, message, args) {
    // $mod @member
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have permission to use this command.");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(`I require \`MANAGE_ROLES\` permission.`);

    const modRole = message.guild.roles.cache.get('807161409099137024');
    const mentionedMember = message.mentions.members.first();

    if (!modRole) return message.channel.send('There is no mod role to give')
    if (!args[0]) return message.channel.send("\'$mod @member\' or \`$mod @id\`")

    await mentionedMember.roles.add(modRole.id).catch(err => message.channel.send (`I was unable to give the admin role due to an error`));


  }
}
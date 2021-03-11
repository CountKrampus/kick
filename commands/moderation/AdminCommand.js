const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AdminCommand extends BaseCommand {
  constructor() {
    super('admin', 'moderation', []);
  }

  async run(client, message, args) {
    // $admin @member
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have permission to use this command.");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(`I require \`MANAGE_ROLES\` permission.`);

    const adminRole = message.guild.roles.cache.get('805698101733097472');
    const mentionedMember = message.mentions.members.first();

    if (!adminRole) return message.channel.send('There is no Admin role to give')
    if (!args[0]) return message.channel.send("\'$admin @member\' or \`$admin @id\`")

    await mentionedMember.roles.add(adminRole.id).catch(err => message.channel.send (`I was unable to give the admin role due to an error`));


  }
}
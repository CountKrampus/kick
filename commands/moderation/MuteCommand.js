const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AdminCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have permission to use this command.");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I require \`MANAGE_ROLES\` permission to mute.");

    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('807401886495539270');
    const memberRole = message.guild.roles.cache.get('704822850279703216')
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    const muteEmbed = new Discord.MessageEmbed()
    .setTitle(`You have been muted from ${message.guild.name}`)
    .setDescription(`Reason for being Muted: ${reason}`)
    .setColor("#5708ab")
    .setTimestamp();


    if (!args[0]) return message.channel.send('\`$mute @member reason\`');
    if (!mentionedMember) return message.channel.send('The member stated isnt in the server.');
    if (mentionedMember.user.id == message.author.id) return message.channel.send('You cannot mute yourself.');
    if (mentionedMember.user.id == client.user.id) return message.channel.send('You cannot mute me with my own command.');
    if (!reason) reason = 'No reason given';
    if (mentionedMember.roles.cache.has(muteRole.id)) return message.channel.send('This member is already muted.');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('You cannot mute anyone a same/higher rank than you.')

    await message.channel.send(muteEmbed).catch(err => console.log(err));
    await mentionedMember.send(muteEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(muteRole.id).catch(err => console.log(err).then(message.channel.send('There was an issue giving the mute role.')));
    await mentionedMember.roles.remove(memberRole.id).catch(err => console.log(err).then(message.channel.send('There was an issue removing the member role.')));
  }
}
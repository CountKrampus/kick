const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('oban', 'moderation', []);
  }

//Overideban: Allows anyone to ban anyone except over

  async run(client, message, args) {
    //Permissions:
if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have permission to use this command.");
   
//Variables:
let reason = args.slice(1).join(" ");
const mentionedMember = message.mentions.members.first();    
    
//input check:
if (!reason) reason = "No reason given.";
if (!args[0]) return message.channel.send('You must state a person to ban.');
if (!mentionedMember) return message.channel.send('The member mentioned is not in the server!');  

//execute:
 const banEmbed = new Discord.MessageEmbed()
   .setTitle(`You have been banned from: ${message.guild.name}`)
   .setDescription(`Reason for being banned: ${reason}`)
   .setColor("#5708ab")
   .setTimestamp();

   await mentionedMember.send(banEmbed).catch(err => console.log(err));
   await mentionedMember.ban({
     days: 7,
     reason: reason
   }).catch(err => console.log(err)).then(() => message.channel.send("They were banned! " + mentionedMember.user.tag));
}
  }
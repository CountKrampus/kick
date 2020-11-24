const { Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('odelete', 'moderation', []);
  }

//Overide Delete: Allows anyone to delete a channel

  async run(client, message, args) {

  //Permission Checking:
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("My role does not have manager channel permission.");

  //Variables:
let reason = args.join(" ");
const nukeChannel = message.channel;

  //Input Checking:
if (!reason) reason = ("No reason given.");
if (!nukeChannel.deletable) return message.channel.send("This channel is not deletable!");

  //Executing:
nukeChannel.delete().catch(err => console.log(err));

  }
}
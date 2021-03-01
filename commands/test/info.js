const BaseCommand = require('../../utils/structures/BaseCommand');
var version = '1.0.2'

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('info', 'Info', []);
  }

  async run(client, message, args) {
   message.channel.send('Author: CreamKrampus#6713 \nCreators Server: Not Listed');
   message.channel.send('Version: ' + version);
   message.channel.send (`Guild Name: ${message.guild.name}\nGuild Owner: ${message.guild.owner.user.username}`);
   message.channel.send(`This server has: ${message.guild.memberCount} members`);
   message.channel.send(`This server has: ${message.guild.roles.cache.size} roles`);
   console.log
  }
}



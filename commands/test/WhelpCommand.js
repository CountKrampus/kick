const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WhelpCommand extends BaseCommand {
  constructor() {
    super('whelp', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe Help Menu:\n1: wframes // Lists all Frames\n2: wprimedframe // List all Frames with Primed Frames\n3: wvaulted // Shows list of vaulted frames');

  }
}
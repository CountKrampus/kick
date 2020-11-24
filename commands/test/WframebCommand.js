const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframebCommand extends BaseCommand {
  constructor() {
    super('wframeb', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // B\n1: Banshee\n2: Baruuk');
  }
}
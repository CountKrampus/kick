const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframedCommand extends BaseCommand {
  constructor() {
    super('wframed', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // K\n1: Khora');
  }
}
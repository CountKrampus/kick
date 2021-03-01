const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframefCommand extends BaseCommand {
  constructor() {
    super('wframef', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // F\n1: Frost');
  }
}
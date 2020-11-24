const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframeeCommand extends BaseCommand {
  constructor() {
    super('wframee', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // E\n1: Ember\n2: Equinox\n3: Excalibur');
  }
}
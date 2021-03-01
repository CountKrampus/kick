const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframeaCommand extends BaseCommand {
  constructor() {
    super('wframea', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // I\n1: Inaros\n2: Ivara');
  }
}
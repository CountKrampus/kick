const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframeaCommand extends BaseCommand {
  constructor() {
    super('wframea', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // A\n1: Ash\n2: Atlas');
  }
}
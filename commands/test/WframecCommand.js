const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframecCommand extends BaseCommand {
  constructor() {
    super('wframec', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // C\n1: Chroma');
  }
}
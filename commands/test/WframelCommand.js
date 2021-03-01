const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframeeCommand extends BaseCommand {
  constructor() {
    super('wframee', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // L\n1: Larvos\n2: Limbo\n3: Loki');
  }
}
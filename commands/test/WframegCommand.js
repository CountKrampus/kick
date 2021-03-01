const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframebCommand extends BaseCommand {
  constructor() {
    super('wframeb', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('Warframe // Frames // G\n1: Gara\n2: Garuda\n3: Gauss\n4: Grendel');
  }
}
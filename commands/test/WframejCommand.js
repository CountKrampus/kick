const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframecCommand extends BaseCommand {
  constructor() {
    super('wframec', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('There are no frames listed for J');
  }
}
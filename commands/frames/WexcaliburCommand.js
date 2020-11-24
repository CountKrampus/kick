const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WexcaliburCommand extends BaseCommand {
  constructor() {
    super('wexcalibur', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send('wexcalibur command works');
  }
}
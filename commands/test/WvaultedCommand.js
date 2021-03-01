const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WvaultedCommand extends BaseCommand {
  constructor() {
    super('wvaulted', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('wvaulted command works');
  }
}
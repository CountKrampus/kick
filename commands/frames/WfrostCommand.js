const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WfrostCommand extends BaseCommand {
  constructor() {
    super('wfrost', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send('wfrost command works');
  }
}
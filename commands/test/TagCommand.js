const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TagCommand extends BaseCommand {
  constructor() {
    super('tag', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('tag command works');

  }
}
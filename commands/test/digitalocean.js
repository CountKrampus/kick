const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('digitalocean', 'test', []);
  }

  async run(client, message, args) {
    message.channel.send("Use https://m.do.co/c/755226302843 to get 100$ in credit over 60 days!");
  }
}
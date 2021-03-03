const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('github', 'test', ['git']);
  }

  async run(client, message, args) {
    message.channel.send("https://github.com/CountKrampus/kick\n Is my terrible github for the Discord Bot!");
  }
}


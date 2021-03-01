const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Test2Command extends BaseCommand {
  constructor() {
    super('myinfo', 'test', []);
  }

  run(client, message, args) {
    message.author.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
}
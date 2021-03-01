const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Meme1Command extends BaseCommand {
  constructor() {
    super('meme19', 'meme', []);
  }

  run(client, message, args) {
    message.channel.send({files: ["./memes/meme19.png"]});
  }
}
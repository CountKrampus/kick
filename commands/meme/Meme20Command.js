const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Meme1Command extends BaseCommand {
  constructor() {
    super('meme20', 'meme', []);
  }

  run(client, message, args) {
    message.channel.send({files: ["./memes/meme20.jpg"]});
  }
}
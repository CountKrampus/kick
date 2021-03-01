const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Meme1Command extends BaseCommand {
  constructor() {
    super('meme14', 'meme', []);
  }

  run(client, message, args) {
    message.channel.send({files: ["./memes/meme14.jpg"]});
  }
}
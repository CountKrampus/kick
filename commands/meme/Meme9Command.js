const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Meme1Command extends BaseCommand {
  constructor() {
    super('meme9', 'meme', []);
  }

  run(client, message, args) {
    message.channel.send({files: ["https://d.newsweek.com/en/full/1176971/obesity-meme.webp?w=737&f=5304e7ad1f87fb1d50fd80f8d62d80db"]});
  }
}
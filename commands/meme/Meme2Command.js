const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Meme1Command extends BaseCommand {
  constructor() {
    super('meme2', 'meme', []);
  }

  run(client, message, args) {
    message.channel.send({files: ["https://nypost.com/wp-content/uploads/sites/2/2020/03/coronavirus-funny-memes-tiktok-gifs.jpg?quality=80&strip=all&w=1200"]});
  }
}
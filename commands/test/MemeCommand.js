const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'test', []);
  }

 async run(client, message, args) {
  var answers = [
      "./memes/meme1.jpg",
      "./memes/meme2.jpg",
      "./memes/meme3.jpg",
      "./memes/meme4.jpg",
      "./memes/meme5.jpg",
      "./memes/meme6.jpg",
      "./memes/meme7.jpg",
      "./memes/meme8.jpg", 
      "./memes/meme9.jpg",
      "./memes/meme10.jpg",
      "./memes/meme11.jpg",               
      "./memes/meme12.jpg",
      "./memes/meme13.jpg",
      "./memes/meme14.jpg",
      "./memes/meme15.jpg",
      "./memes/meme16.jpg",
      "./memes/meme17.jpg",
      "./memes/meme18.jpg",
      "./memes/meme19.jpg", 
      "./memes/meme20.jpg",
    ]   
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send({files: [randomAnswer]});
  }
}
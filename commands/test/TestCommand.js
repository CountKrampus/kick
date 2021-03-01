const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('dolympus', 'testing', []);
  }

  async run(client, message, args) {
    var answers = [
      "depot.mp3",
      "estates.mp3",
      "oasis.mp3",
      "bonsai.mp3",
      "centralturbine.mp3",
      "docks.mp3",
      "elysium.mp3",
      "goldengardens.mp3", 
      "hydroponics.mp3",
      "hammond.mp3",
      "testsite.mp3",               
    ]   
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    const connection = await message.member.voice.channel.join();
     connection.play(randomAnswer)

  }
}
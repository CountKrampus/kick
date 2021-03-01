const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class JoinCommand extends BaseCommand {
  constructor () {
    super('join', 'voice commands', []);
  }

  async run (client, message, args) {
    const { channel } = message.member.voice;
    if (channel) {
      console.log('In the channel.');
      const connection = await message.member.voice.channel.join();
      message.channel.send('Joined!')
      connection.play("crown.mp3")
    
    } else {
      message.channel.send('Please join a voice');
    }
  }
}
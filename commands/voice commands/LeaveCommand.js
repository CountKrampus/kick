const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LeaveCommand extends BaseCommand {
  constructor() {
    super('leave', 'voice commands', []);
  }

  run(client, message, args) {
    const { channel } = message.member.voice;
    if (channel) {
      console.log('Leaving now!.');
      message.member.voice.channel.leave();
      message.reply("I have successfully left the voice channel!")};
   
      if (!channel) {
        if (message.member.voice);
        message.channel.send('I`m currently not in a Voice');
    };
  };
}
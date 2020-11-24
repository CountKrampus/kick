const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WprimedframeCommand extends BaseCommand {
  constructor() {
    super('wprimedframe', 'test', []);
  }

  run(client, message, args) {
    message.channel.send('wprimedframe command works');
  
  }
  
}
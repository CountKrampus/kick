const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WarframeCommand extends BaseCommand {
  constructor() {
    super('orion', 'test', []);
  }

  async run(client, message, args) {
    client.user.setActivity(": Orionisbad", {
      type: "STREAMING",
      url: "https://www.twitch.tv/Orionisbad"
    }); 
  }
}
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WarframeCommand extends BaseCommand {
  constructor() {
    super('warframe', 'test', []);
  }

  async run(client, message, args) {
    client.user.setActivity(": Warframe", {
      type: "STREAMING",
      url: "https://www.twitch.tv/Warframe"
    }); 
  }
}
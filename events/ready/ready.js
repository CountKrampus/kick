const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' Is Operational ');
    
    client.on("ready", () => {
      const channel = client.channels.get("mychannelid");
      if (!channel) return console.error("The channel does not exist!");
      channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
      }).catch(e => {
        // Oh no, it errored! Let's log it to console :)
        console.error(err);
      });
    });

  }
}
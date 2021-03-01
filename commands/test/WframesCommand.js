const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WframesCommand extends BaseCommand {
  constructor() {
    super('wframes', 'test', []);
  }

  run(client, message, args) {
    message.channel.send("Warframes // Frames: These will not include Conclave versions\nYou can refine your search by doing // Example 'wframesa' to show all the primes that start with A");

  }
}
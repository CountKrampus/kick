const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WbansheeCommand extends BaseCommand {
  constructor() {
    super('wbanshee', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send('//Manufacturing Requirements | Market Price: 225p | Blueprint Price: N/A //\n\nNeuroptics Time: 12hrs | Rush: 25p\n15,000 Credits\n150 Circuits\n1 Neural Sensor\n200 Polymer Bundles\n500 Salvage\n\nChassis Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Morphics\n900 Ferrite\n50 Rubedo\n\nSystems Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Control Moudle\n1 Morphics\n500 Salvage\n400 Plastids\n\nFrame Time: 72hrs | Rush: 50p\n\n25,000 Credits\n1 Neuroptics\n1 Chassis\n1 Systems\n1 Orkin Cell\n\nBanshee`s blueprint can be purchased from the Tenno Research Lab interface in the Clan Dojo once it has been researched. It costs 35,000 Credits to replicate.');
    message.channel.send("Picture:", {files: ["./images/banshee.png", "./images/banshee2.png"]});
  }
}
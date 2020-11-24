const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WemberCommand extends BaseCommand {
  constructor() {
    super('wember', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send('//Manufacturing Requirements | Market Price: 225p | Blueprint Price: 25,000 Credits//\n\nNeuroptics Time: 12hrs | Rush: 25p\n15,000 Credits\n150 Alloy Plates\n1 Neural Sensor\n150 Polymer Bundles\n500 Rubedo\n\nChassis Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Morphics\n1,000 Ferrite\n300 Rubedo\n\nSystems Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Control Moudle\n1 Morphics\n500 Salvage\n220 Plastids\n\nFrame Time: 72hrs | Rush: 50p\n25,000 Credits\n1 Neuroptics\n1 Chassis\n1 Systems\n 1 Orkin Cell\n\nEmber`s component blueprints are acquired from General Sargas Ruk (Tethys, Saturn).\nChassis: 38.72%\nNeuroptics: 38.72%\nSystems: 22.56%\nExpected Kills: 6 – 7\nNearly Guranteed: 27 ± 9 kills\n\n');
    message.channel.send("Picture:", {files: ["./images/ember.png"]}); 
  }
}
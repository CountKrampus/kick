const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WashCommand extends BaseCommand {
  constructor() {
    super('wash', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send('//Manufacturing Requirements | Market Price: 375p | Blueprint Price: 35,000 Credits//\n\nNeuroptics Time: 12hrs | Rush: 25p\n15,000 Credits\n150 Alloy Plates\n1 Neural Sensor\n150 Polymer Bundles\n500 Rubedo\n\nChassis Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Morphics\n1,000 Ferrite\n300 Rubedo\n\nSystems Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Control Moudle\n1 Morphics\n500 Salvage\n500 Plastids\n\nFrame Time: 72hrs | Rush: 50p\n25,000 Credits\n1 Neuroptics\n1 Chassis\n1 Systems\n 1 Orkin Cell\n\nManics have a 33% chance to drop a component blueprint.\nChassis: 12.907%\nNeuroptics: 12.907%\nSystems: 7.52%\nExpected Kills: 18 – 19\nNearly Guranteed: 88 ± 29 kills\n\n');
    message.channel.send("Picture:", {files: ["./images/ash.png"]});
  
  }
}
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WequinoxCommand extends BaseCommand {
  constructor() {
    super('wequinox', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send("//Manufacturing Requirements // 25,000 Credits, 1 Equinox (day) 1 Equinox (night) 1 Forma | Market Price: 325p | Blueprint Price: 25,000 Credits // | \n\nDay Aspects:\nNeuroptics Time: 12hrs | Rush: 25p\n15,000 Credits\n150 Alloy Plates\n1 Neural Sensor\n150 Ferrite\n500 Rubedo\n\nChassis Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Gallium\n1,000 Ferrite\n300 Rubedo\n\nSystems Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Control Moudle\n1 Gallium\n500 Salvage\n220 Plastids\n\nFrame Time: 72hrs | Rush: 50p\n25,000 Credits\n1 Neuroptics\n1 Chassis\n1 Systems\n 1 Orkin Cell\n\nNight Aspect:\nNeuroptics Time: 12hrs | Rush: 25p\n15,000 Credits\n150 Alloy Plates\n1 Neural Sensor\n500 Plastids\n150 Polymer Bundle\n\nChassis Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Morphics\n1,000 Polymer Bundle\n300 Plastids\n\nSystems Time: 12hrs | Rush: 25p\n15,000 Credits\n1 Control Moudle\n1 Morphics\n500 Nano Spores\n500 Plastids\n\nFrame Time: 72hrs | Rush: 50p\n25,000 Credits\n1 Neuroptics\n1 Chassis\n1 Systems\n 1 Orkin Cell \n\n(//Gather//)\n\n");
    message.channel.send("Picture:", {files: ["./images/equinox.png"]});
  }
}
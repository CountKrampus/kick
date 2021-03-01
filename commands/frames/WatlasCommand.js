const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WatlasCommand extends BaseCommand {
  constructor() {
    super('watlas', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send('//Manufacturing Requirements | Market Price: 275p | Blueprint Price: N/A //\n\nNeuroptics: 12hrs | Rush: 25p\n15,000 Credits\n1,400 Polymer Bundle\n1,100 Alloy Plates\n800 Circuits\n5 Neurodes\n\nChassis Time: 12hrs | Rush: 25p\n15,000 Credits\n1,800 Nano Spores\n1,300 Cryotic\n700 Rubedo\n2 Argon Cystals\n\n15,000 Credits\n4,600 Ferrit\n1,700 Polymer Bundle\n5 Morphics\n1 Orkin Cell\n\nCompleting The "Jordas Precept Quest", which unlocks the Jordas Golem Archwing Assassination mission on Eris.\nChassis: 38.72%%\nNeuroptics: 38.72%\nSystems: 22.56%\nExpected Kills: 6 – 7\nNearly Guranteed: 27 ± 9 kills');
    message.channel.send("Picture:", {files: ["./images/atlas.png"]});
  }
}
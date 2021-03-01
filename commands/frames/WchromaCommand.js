const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WchromaCommand extends BaseCommand {
  constructor() {
    super('wchroma', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send('//Manufacturing Requirements | Market Price: 375p | Blueprint Price: 35,000 Credits//\n\nNeuroptics Time: 12hrs | Rush: 25p\n15,000 Credits\n200 Plastids\n2 Neural Sensors\n350 Polymer Bundles\n1 Ember Neuroptics\n\nChassis Time: 12hrs | Rush: 25p\n15,000 Credits\n2 Neurodes\n900 Salvage\n50 Plastids\n1 Frost Chassis\n\nSystems Time: 12hrs | Rush: 25p\n15,000 Credits\n400 Oxium\n2 Argon Crystals\n1 Neurodes\n1 Saryn Systems\n\nFrame Time: 72hrs | Rush: 50p\n25,000 Credits\n1 Neuroptics\n1 Chassis\n1 Systems\n1 Volt Neuroptics\n\nChroma`s main blueprint is rewarded upon completion of the quest The New Strange.\nComponent blueprints are awarded by completing Junctions. The Neuroptics will be rewarded after completing the Uranus Junction, the Chassis the Neptune Junction and the Systems the Pluto Junction. Additional blueprints can be bought from Cephalon Simaris; 25,000 Standing for component blueprints and 50,000 Standing for main blueprint.');
    message.channel.send("Picture:", {files: ["./images/chroma.png"]});
  }
}
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WbaruukCommand extends BaseCommand {
  constructor() {
    super('wbaruuk', 'frames', []);
  }

  run(client, message, args) {
    message.channel.send('//Manufacturing Requirements | Market Price: 325p | Blueprint Price: 5,000 Standing //\n\nNeuroptics Time: 12hrs | Rush: 25p\n15,000 Credits\n3 Sola Toroid\n2,850 Alloy Plates\n50 Hespazym Alloy\n5 Synathid Ecosynth Analyzer\n\nChassis Time: 12hrs | Rush: 25p\n15,000 Credits\n3 Vega Toroid\n3,250 Salvage\n100 Hespazym Alloy\n5 Marquise Thyst\n\nSystems Time: 12hrs | Rush: 25p\n15,000 Credits\n3 Calda Toroid\n2,500 Ferrite\n10 Tromyzon Entroplasma\n5Radiant Zodian\n\nFrame Time: 72hrs | Rush: 50p\n25,000 Credits\n1 Neuroptics\n1 Chassis\n1 Systems\n 1 Orkin Cell\n\nAll of Baruuk`s blueprints can only be acquired by purchasing from Little Duck, using Vox Solaris standing. The main blueprint requires players to be at Agent rank, while component blueprints require Hand rank. Each blueprint costs 5,000 Standing, totaling 20,000 standing.');
    message.channel.send("Picture:", {files: ["./images/baruuk.png"]});
  }
}
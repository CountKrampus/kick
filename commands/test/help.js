const discord = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('help', 'menu', []);
  }

  async run(client, message, args) {
    message.author.send('《Help》\n\n↠Random:\n|1: Ping // Pings the bot  \n|2: Info // Returns bot info\n|3: Say // Make the bot say things for you!\n|4: Whelp // Warframe Help Menu // Still a WIP\n|5: Meme (1-20) //Sends a meme// WIP\n|6: Dolympus //Bot will join and say where to drop on the apex map Olympus\n\n ↠Moderation:\n|1: Kick // Kicks mentioned user \n|2: Nuke // Deletes and remakes channel command is used in with the same permissions.\n|3: Ban // Bans mentioned user \n|4: Unban // Unbans user.\n|5: Peek // Shows tagged person`s userID and username\n\n  ↠Voice Commands:\n|1: Join //Makes bot join the VC\n|2: Leave // Makes bot leave VC');
    message.channel.send('《Help》\n\n↠Random:\n|1: Ping // Pings the bot  \n|2: Info // Returns bot info\n|3: Say // Make the bot say things for you!\n|4: Whelp // Warframe Help Menu // Still a WIP\n|5: Meme (1-20) //Sends a meme// WIP\n|6: Dolympus //Bot will join and say where to drop on the apex map Olympus\n\n ↠Moderation:\n|1: Kick // Kicks mentioned user \n|2: Nuke // Deletes and remakes channel command is used in with the same permissions.\n|3: Ban // Bans mentioned user \n|4: Unban // Unbans user.\n|5: Peek // Shows tagged person`s userID and username\n\n ↠Voice Commands:\n|1: Join //Makes bot join the VC\n|2: Leave // Makes bot leave VC');
    
  }
} 
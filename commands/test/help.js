const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('help', 'test', []);
  }



  async run(client, message, args) {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle(`Help Menu`)
      .addFields(
        { name: '↠Random', value: '|1: Ping // Pings the bot\n|2: Info // Returns bot info\n|3: Say // Make the bot say things for you!\n|4: Whelp // Warframe Help Menu  Still a WIP\n|5: Meme  // Sends a meme WIP\n|6: Punch // Punch that annoying kid!\n|7: d20 //  Bot will roll a 20 sided dice and send the answer in chat\n|8: Resend/Snipe // Resends the last deleted message\n|9: Suggestion // lets you send a nicer looking suggestion\n|10: github // Sends link to the github\n|11: digitalocean // DigitalOcean referral link\n|12: quote // sends a random quote'},
        { name: '↠Moderation', value: '|1: Kick // Kicks mentioned user \n|2: Nuke // Deletes and remakes channel with the same permissions.\n|3: Ban // Bans mentioned user \n|4: Unban // Unbans user.\n|5: Peek // Shows tagged person`s userID and username\n|6: Admin // Promte a user to Admin\n|7: Mod // Promote user to Mod\n|8: Mute // Mutes a user and prohibits use of voice channels\n|9: Unmute // Unmutes a user\n|10: Vote // Creates a voting poll'},
        { name: '↠Voice Commands', value: '|1: Join // Makes the bot join a voice channel\n|2: Leave // Makes the bot leave the voice channel\n|3: Dolympus // Bot will join and say where to drop on the apex map Olympus'},
        { name: 'Hosted By:', value: 'http://digitalocean.com'}
         )
      .setColor("#eb4034")
      .setFooter('Made with love by Krampus')
      .setTimestamp();
      try {
        await message.channel.send(helpEmbed);
        await message.author.send(helpEmbed)
      } catch (err) {
        console.log(err);
        message.channel.send('I am not able to send that');
      }
  }
}
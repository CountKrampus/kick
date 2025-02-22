require('dotenv').config();
const Discord = require('discord.js');
const { Client, DiscordAPIError } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const client = new Client();
client.snipes = new Discord.Collection();



client.on("presenceUpdate", (oldPresence, newPresence) => {
  if (newPresence.user.id == "236624866470526976", "534573770061512734") {
    if (!newPresence.activities) return false;
    newPresence.activities.forEach(activity => {
        if (activity.type == "STREAMING") {
          const streamEmbed = new Discord.MessageEmbed()
          .setTitle(`${newPresence.user.username} has started Streaming`)
          .setDescription(`${activity.details} at ${activity.url}`)
          .setColor("#5708ab")
          .setFooter('Made with love by Krampus')
          .setTimestamp();
          client.channels.cache.get(`805658262766092308`).send("@everyone", streamEmbed);
    }
  });
 }});

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.DISCORD_BOT_PREFIX;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();

/// client.channels.cache.get(``).send

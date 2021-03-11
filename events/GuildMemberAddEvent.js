// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const role = member.guild.roles.cache.get('704822850279703216');
    await member.roles.add(role.id).catch(err => console.log(err));

    const welcomeChannel = member.guild.channels.cache.get('704708740456251462');
    const rulesChannel = member.guild.channels.cache.get('704556779765497866');
    welcomeChannel.send(`<@${member.user.id}>, Welcome to ${member.guild.name}. Read the rules and type $verify once done: ${rulesChannel}!`);
  }
}


// Welcome channel = 704708740456251462
// Auto role (Mafia) = 704822850279703216
// Rules Channel = 704556779765497866
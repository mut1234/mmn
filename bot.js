const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
client.user.setGame(' STRONG SERVER ','https://www.twitch.tv/peery13');
  console.log(`Logged in as ${client.user.tag}!`);
  });
  var prefix = "#";
client.on("message", message => {
 
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : DONE SEND TO`);
 message.delete();
};    
});
 

client.login("NDczNjMwNTg5MDU3MjM3MDAy.DsYtDQ.MXQ4wtuVka2CKpTsNYWKPmWrn80");

client.login(process.env.BOT_TOKEN);

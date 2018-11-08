onst Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});







client.login('token');  



client.on("message", message => {

            if (message.content.startsWith(prefix + "*bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})



client.on('message', message => {
if (message.content.startsWith("*kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};



client.on('message', message => {
if (message.content.startsWith("*ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});
});
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord. gg')){// gg شيل المسافه الي بين النقطق وال
        if(!message.channel.guild) return;
        message.delete()
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted'));
    const embed500 = new Discord.RichEmbed()
      .setTitle(" - Alert")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
   
       
    }
    }
})



client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});



client.on('message', message => {
if (message.content.startsWith(prefix+"*ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});



client.on('message', message => {
if (message.content.startsWith(prefix+"*cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
         
        }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('السب'كسمك'لعن 'ابوك'كس 'اختك' كس 'امك )){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});



client.on("message", message => {
    var prefix = "+";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clr")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©Ghost"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});



client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord. gg')){// gg شيل المسافه الي بين النقطق وال
        if(!message.channel.guild) return;
        message.delete()
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted'));
    const embed500 = new Discord.RichEmbed()
      .setTitle(" - Alert")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
   
       
    }
    }
})



client.on('message', message => {
            if (message.content.startsWith("السلام عليكم")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**وعليكم السلام **', ' ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
            }
 });
    client.on('message', message => {
            if (message.content.startsWith("باك")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**ولكم منور يمز من زمان عنك  **', ' ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
            }
 });



});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose: يا بطل ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})



client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "welcome")
        const embed = new Discord.RichEmbed()
        .setColor('00FF01')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("اهلا وسهلا فيك ومرحبتين منور  ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});



client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "welcome")
        const embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("خرج عضو انشالله يكون استمتع معنا ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});



     if (message.content === "$c-roles") {
         LOka.guilds.forEach(m =>{
guild.createRole({
        name : "Owner
",
        permissions :   [1],
        color : " #ff0000"
    }) 
guild.createRole({
        name : "Co-Owner",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "Leader",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "Co-Leader",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "Admin",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "VIP",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "HELPER",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "KING",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "MEMBER-CLAN",
        permissions :   [1],
        color : " #ff0000"
    })

guild.createRole({
        name : "YouTuber",
        permissions :   [1],
        color : " #ff0000"
    })

guild.createRole({
        name : "YouTuber",
        permissions :   [1],
        color : " #ff0000"
    })

guild.createRole({
        name : "Bot",
        permissions :   [1],
        color : " #ff0000"
    })



LOka.on('message', message => {
         if (message.content === "$cv-rooms") {
               LOka.guilds.forEach(m =>{
guild.createChannel('SAWALEF  | سوالف', 'voice');
guild.createChannel('ROG  | روق', 'voice');
guild.createChannel('3rb.be', 'voice');
guild.createChannel('Gota.io', 'voice');
guild.createChannel('dual agar', 'voice');
guild.createChannel('ix-agar', 'voice');
guild.createChannel('JUSTE 1  ', 'voice');
guild.createChannel('JUSTE 2  ', 'voice');
guild.createChannel('JUSTE 3  ', 'voice');
guild.createChannel('JUSTE 4  ', 'voice');
guild.createChannel('JUSTE 5  ', 'voice');
guild.createChannel('AFK  ', 'voice');



LOka.on('message', message => {
         if (message.content === "$ct-rooms") {
               LOka.guilds.forEach(m =>{
guild.createChannel('info', 'text');
guild.createChannel('news', 'text');
guild.createChannel('welcome', 'text');
guild.createChannel('warning', 'text');
guild.createChannel('rules', 'text');
guild.createChannel('chat', 'text');
guild.createChannel('bot', 'text');
guild.createChannel('bo7', 'text');
guild.createChannel('pic', 'text');
guild.createChannel('cut-tweet', 'text');
guild.createChannel('takeovers', 'text');
guild.createChannel('youtube', 'text');



const fs = require("fs"); 
const Canvas = require("canvas");
const jimp = require("jimp");
const prefix = "%"; 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
 let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("***bc <message>**");
    return;
    }
        message.guild.members.forEach(member => {
      if(!message.member.hasPermission('ADMINISTRATOR'))  return;
      message.react("?");
            const w = ['./img/w1.png'];
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = '15px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${args} ` , 200, 100);
member.sendFile(canvas.toBuffer());
});
});
});
}
});



client.on('message', function(msg) {
    const prefix = '+'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});
client.login(process.env.BOT_TOKEN);

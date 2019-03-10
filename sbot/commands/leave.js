const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = (bot, message, args, discord) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**- الأوامر :**
- \`$leave set #channel\`
- \`$leave on\`
- \`$leave off\`
- \`$leave img [URL]\`
`)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./db/leave.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**:x: | لا تمتلك صلاحيات**`);
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./db/leave.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`**- تم التحديد لـ :\n\n${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
  {
              if (option.match("sc")) {
            var nick = JSON.parse(fs.readFileSync("./db/leave.json", "utf8"))
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./db/leave.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`**-  تم أعداد الخروج لـ :\n\n${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
                if (option.match("img")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./db/backgroundl.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**:x: | لا تمتلك صلاحيات**`);
            var inputmessage = args.slice(1).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./db/backgroundl.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`** - تم تحديد صورة الخرروح لـ :\n\n${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            
                            if (option.match("image")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./db/backgroundj.json", "utf8"))
            var inputmessage = args.slice(1).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./db/backgroundj.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`**- تم تحديد صورة الولكم لـ :\n\n${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("on")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**:x: | لا تمتلك صلاحيات**`);
            var welcomesetting = JSON.parse(fs.readFileSync("./db/leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./db/leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`- أمر الخروج : **on**.`)
                .setTimestamp()
                
                message.channel.send({embed});
            }
              if (option.match("enable")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./db/leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./db/leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`- أمر الخروج : **on**.`)
                .setTimestamp()
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**:x: | لا تمتلك صلاحيات**`);
            var welcomesetting = JSON.parse(fs.readFileSync("./db/leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./db/leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`- أمر الخروج : **off**.`)
                .setTimestamp()
                
                message.channel.send({embed});
            }
              if (option.match("disable")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./db/leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`- أمر الخروج : **off**.`)
                .setTimestamp()

                
                message.channel.send({embed});
            }
            if (option.match("IKDKALSALSAJLSNANS")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./db/leave.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**leave:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**let:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}
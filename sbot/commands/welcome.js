const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args, tools) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**الأوامر :**
- \`$welcome set #channel\`
- \`$welcome on\`
- \`$welcome off\`
- \`$welcome img [URL]\`
`)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./db/welcome.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**:x: | لا تمتلك صلاحيات**`);
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./db/welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`** - تم تحديد الصورة في :\n\n${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
  {
              if (option.match("sc")) {
            var nick = JSON.parse(fs.readFileSync("./db/welcome.json", "utf8"))
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./db/welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`** - تم تحديد الصورة في :\n\n${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
                if (option.match("img")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./db/backgroundj.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("**:x: | لا تمتلك صلاحيات**");
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
              .setDescription(`** - تم تحديد الصورة في :\n\n${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("on")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**:x: | لا تمتلك صلاحيات**`);
            var welcomesetting = JSON.parse(fs.readFileSync("./db/welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./db/welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`- أمر الترحيب : **on**.`)
                .setTimestamp()
                
                message.channel.send({embed});
            }
              if (option.match("enable")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./db/welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`- أمر الترحيب : **on**.`)
                .setTimestamp()
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**:x: | لا تمتلك صلاحيات**`);
            var welcomesetting = JSON.parse(fs.readFileSync("./db/welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./db/welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`- أمر الترحيب : **off**.`)
                .setTimestamp()
                
                message.channel.send({embed});
            }
              if (option.match("disable")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./db/welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`- أمر  الترحيب : **off**.`)
                .setTimestamp()
                
                message.channel.send({embed});
            }
            if (option.match("sLJSAKSKhsKSHskHSK")) { 
              let nick = JSON.parse(fs.readFileSync("./db/welcome.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**الترحيب :**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**WELCOME:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}
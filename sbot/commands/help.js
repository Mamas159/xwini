const Discord = require("discord.js")

module.exports.run = (bot, message, args, ops, ) => {

var option = args.slice(0).join(" ")
            if (!option) {
                var helpembed = new Discord.RichEmbed()
              if (option.match("welcome")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**- الأوامر :**
- \`$welcome set #channel\`
- \`$welcome on\`
- \`$welcome off\`
**- أمثلة :**
- \`$welcome set #welcome-goodbye\`
- \`$welcome on\`
`)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}

                

}
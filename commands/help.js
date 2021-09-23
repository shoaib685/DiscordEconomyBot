const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
    client.commands.forEach(cmd => {
        embed.setTitle(`Our full help menu! 👑`)
   // embed.setThumbnail(`https://media.giphy.com/media/iP1qEUE7VKhLq/giphy.gif?cid=790b7611d4fd1065518257cac7f729878a014e72d4888952&rid=giphy.gif&ct=g`)
        embed.setDescription(
            `\`\`\`ini\nPrefix: ${client.prefix}\nif you found ${client.user.username} [${client.prefix}] helpful ! \nIf u got any error do [${client.prefix}bug] your bug must be 10 ltters \`\`\`\n> Feel Free To Join Our [Support Server](https://discord.gg/4h5AtBqfYt)\n`
          )
        embed.addField(`${cmd.help.name}:`, `\`\`\`Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: ${client.prefix}${cmd.help.usage}\`\`\``, true);
        embed.setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL({
              dynamic: true,
            })
          )
          embed.setImage(`https://media.giphy.com/media/IIqXrFZTxz49dYD1gf/giphy.gif?cid=790b7611442bd7dfc3bee827606a59cb9386ebe5d2edba0c&rid=giphy.gif&ct=g`)
          embed.setColor('0x2F3136')
          embed.setFooter("made by serverking")
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}

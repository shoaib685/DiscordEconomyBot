const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send("❌ | Empty Leaderboard!");
    const embed = new MessageEmbed()
        .setAuthor(`Leaderboard of ${message.guild.name}!`, message.guild.iconURL)
        .setColor("RANDOM")
        .setThumbnail(client.users.cache.get(leaderboard[0].id) ? client.users.cache.get(leaderboard[0].id).displayAvatarURL : "https://media.giphy.com/media/IIqXrFZTxz49dYD1gf/giphy.gif?cid=790b7611442bd7dfc3bee827606a59cb9386ebe5d2edba0c&rid=giphy.gif&ct=g")
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Unknown#0000"}`, `${u.money} 💸`);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "lb",
    aliases: ["leaderboard"],
    usage: `lb`
}

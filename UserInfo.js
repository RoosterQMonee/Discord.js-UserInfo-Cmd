const Discord = require('discord.js')
module.exports = {
    name: "userinfo",
    description: "Show user info",
    run: async(client, message, args) => {
        if(!args[0]){
            var user = message.author;
          } else var user = message.mentions.users.first()
                   
          const member = message.guild.member(user);
          
              const activities = [];
              for (const activity of user.presence.activities.values()) {
                switch (activity.type) {
                  case 'PLAYING':
                    activities.push(`Playing **${activity.name}**`);
                    break;
                  case 'LISTENING':
                    if (user.bot) activities.push(`Listening to **${activity.name}**`);
                    else activities.push(`Listening to **${activity.details}** by **${activity.state}**`);
                    break;
                  case 'WATCHING':
                    activities.push(`Watching **${activity.name}**`);
                    break;
                  case 'STREAMING':
                    activities.push(`Streaming **${activity.name}**`);
                    break;
                  case 'CUSTOM_STATUS':
                    customStatus = activity.state;
                    break;
                }}
          
          
          
          
          
            const infoEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(`${user.username}'s Information`)
            .setDescription(`Info from ${message.guild.name}`)
            .setThumbnail(user.avatarURL({dynamic: true}))
            .setFooter('requested')
            .setTimestamp()
            .addFields(
                { 
                    name: "User Info",
                    value: "```Username:"+user.username+"\nDiscriminator: #"+user.discriminator+"\nTag: "+user.tag+"\nServer Nickname: "+member.displayName+"\nIs Bot: "+user.bot+"\nID: "+user.id+" ```",
                    inline: true
                },
                {
                    name: `Status`,
                    value: "```"+user.presence.status+"\n"+activities+"```",
                    inline: false
                },
                {
                    name: `Member Info`,
                    value: "```Joined Server: "+new Date(user.joinedAt).toLocaleDateString()+"\nJoined Discord: "+new Date(user.createdTimestamp).toLocaleDateString()+"```",
                    inline: true
                },
                {
                  name: `Roles`,
                  value: ""+member.roles.cache.map(r => r).join(' | ')+"",
                  inline: true
                },
              
          
            )
          
            return message.channel.send(infoEmbed)
    }
}

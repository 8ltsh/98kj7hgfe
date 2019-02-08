const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);


client.on('message', async message =>{

    if (message.author.omar) return;
    if (!message.content.startsWith(#)) return;
    if(!message.channel.guild) return message.channel.send('**This Command For Servers Only ! **').then(m => m.delete(5000));
    if(!message.member.hasPermission('MANAGE_ROLES'));
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    var args = message.content.split(" ").slice(1);
      if(command == "mute") {
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply(":information_source: `#mute @972` يجب تحديد شخص ") .then(m => m.delete(5000));
        if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**I Dont Have Permission** `MANAGE_MASSAGEES`');
        let muterole = message.guild.roles.find(`name`, "Muted");

        if(message.content.startsWith(prefix + "mute")) {
          let picembed = new Discord.RichEmbed()
  .setImage('./mute.png')
         message.channel.sendEmbed(picembed)
    
        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "Muted",
              color: "#000000",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e.stack);
          }
        }
  
        await(tomute.addRole(muterole.id));
        message.channel.send(`**<@${tomute.id}> Has been muted ! :white_check_mark:**`);
          message.delete();

          fs.writeFile('./mute.png', P.stringify(bane), (err) => {

  
      }
    }); // By Toxix
    

const Discord = require("discord.js");
const YTDL = require ("ytdl-core");
const TOKEN = "MyToken";
const PREFIX = "!!";

function generateHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connections.playStream(YTDL(server.queue[0], ));
}

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Fuck u"
];
 
var bot = new Discord.Client();

var server = {};

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "introductions").sendMessage(member.toString() + " Hey, Welcome to GameHUB! Please use <#570716064179027997>!");
    
    member.addRole(member.guild.roles.find("name", "Trusted"));

    member.guild.createRole({
        name: member.user.username,
        color: generateHex(),
        permission: []
    }).then(function(role) {
        member.addRole(role);
    });

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return; 

    var args = message.content.substring(PREFIX.lenght).split(" ");
    
    switch (args[0]) {
    case "ping":
        message.channel.sendMessage("Pong!");
        break;
    case "info":
        message.channel.sendMessage("Created by Clive");
        break;
        case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.lenght)]);
        else message.channel.sendMessage("Can't read that");
        break;
     case "embed":
    var embed = new Discord.RichEmbed()
        .addField("Test Title", "Test Description", true)
        .addField("Test Title 2", "Test Description 2", true)
        .addField("Test Title 3", "Test Description 3", true)
        .addField("Test Title 3", "Test Description 3")
        .addField("Test Title 3", "Test Description 3")
        .setColor(0x00FFFF)
        .setFooter("This Embed is a test.")
        .setThumbnail(message.author.avatarUR)
         message.channel.sendEmbed(embed);
        break;
    case "noticeme":
        message.channel.sendMessage(message.author.toString() + " asasasassa");
        break;    
   case "removerole":
        message.member.removeRole(message.member.guild.roles.find("name", "Trusted"));
        break;
    case "deleterole":
        message.member.guild.roles.find("name", "Trusted").delete();
    case "play":
        if (!args[1]) {
            message.channel.sendMessage("Please provide a link");
            return;
        }
        if (!message.member.voiceChannel) {
            message.channel.sendMessage("You must be in a voice channel");
            return;
        }
        if (!server[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };
        
        var server = servers[message.guild.id];

        if (!message.guild.id.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connected, message);
    });
    break;
    default:
         message.channel.sendMessage("Invalid Command");
         break;
    }

    });

bot.login(TOKEN)
 

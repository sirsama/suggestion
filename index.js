const express = require('express');
const app = express();
app.get('/', (req, res) => {	res.send('Hello Express app!');
});
app.listen(3000, () => {
	console.log('\033[32m SERVER STARTED');
});
app.use('/ping', (req, res) => {
	res.send(new Date());
});

//=================================

const Discord = require('discord.js'); 
const client = new Discord.Client();
const ms = require('ms')
const fs = require('fs')
const disbut = require('discord-buttons')
disbut(client)
const axios = require('axios');

//=================================

client.on('ready', () => {
console.log(`[NAME] ${client.user.tag}`)
console.log(`[ID] ${client.user.id}`)
console.log(`[GUILDS] ${client.guilds.cache.size}`)
console.log(`[PING] ${client.ws.ping}`)
client.user.setStatus("online")
function msg() { 
 let status = [`Dev By: Pepo Sp Black`];
 let S = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[S],{ type : 'WATCHING'})
};

setInterval(msg,7000)
}) 

//=================================

let sug = ['890382500491329559','',''];

let link = "https://media.discordapp.net/attachments/751499001010061433/930506240243683358/oie_87471k4y3DnfdfdfdfdhL.gif";

//=================================

   function generate(number) {
  let gg = [];
  
let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     
  string = string.split("");
  for(let k = 0; k < number; k++) {
    gg.push(string[Math.floor(Math.random() * string.length)]);
  }
  return gg.join("");
}

let feedback = new Set()

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    let i = 0;
    let l = 0;
    let back = generate(5)
let go = generate(5)
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(`RANDOM`).setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}
    let buttonn = new disbut.MessageButton()
  .setStyle('green') //default: blurple
  .setEmoji('✔️') 
  .setLabel(`${i}`) //default: NO_LABEL_PROVIDED
  .setID(back)
  let button2 = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setEmoji('❌')
  .setLabel(`${l}`) //default: NO_LABEL_PROVIDED
  .setID(go)
message.channel.send(embed, {buttons: [buttonn, button2]}).then(msg => {
          let filter = (button) => button.clicker.user.id != client.user.id
        let collector = msg.createButtonCollector(filter) 
        collector.on('collect', async button => {
        await button.reply.defer();
        if (button.id === go) {
        if (feedback.has(`${button.clicker.user.id}${msg.id}`)) {
            return;
        } else {
        l+= 1
            let buttonn = new disbut.MessageButton()
  .setStyle('green') //default: blurple
  .setEmoji('✔️') 
  .setLabel(`${i}`) //default: NO_LABEL_PROVIDED
  .setID(back)
  let button2 = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setEmoji(`❌`)
  .setLabel(`${l}`) //default: NO_LABEL_PROVIDED
  .setID(go)
         msg.edit(embed,{buttons: [buttonn, button2]})
         feedback.add(`${button.clicker.user.id}${msg.id}`)
        }
        }
        if (button.id === back) {
                    if (feedback.has(`${button.clicker.user.id}${msg.id}`)) {
            return;
        } else {
                     i+= 1 
                let buttonn = new disbut.MessageButton()
  .setStyle('green') //default: blurple
  .setEmoji('✔️') 
  .setLabel(`${i}`) //default: NO_LABEL_PROVIDED
  .setID(back)
  let button2 = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setEmoji('❌')
  .setLabel(`${l}`) //default: NO_LABEL_PROVIDED
  .setID(go)
         msg.edit(embed,{buttons: [buttonn, button2]})
                  feedback.add(`${button.clicker.user.id}${msg.id}`)
        }
        }      
    })
 message.channel.send({files: [link]});    })
message.author.send(`Thank you for <#${message.channel.id}>`).catch(console.error) 
  }
}); 

//=================================

client.login(process.env.token).catch((err) => {
	console.warn("\033[31m Token Invalid")
})

const Discord = require('discord.js');
const client = new Discord.Client();


async function keks(){
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'lul1') {
    msg.channel.send('lul1');
  }
});

client.on("message", msg => {
  if (msg.content === 'WTF SA' && msg.channel.id == '719486191992307793' || msg.channel.id == "719504108201181237")

    msg.channel.send('WTF SA')
  })

client.on("message", msg => {
  if (msg.content === "FUCK U DEVI EARNY")
    msg.channel.send("FUCK U DEVI EARNY")
  })

/*lient.on("message", msg => {
  if (msg.content === "++restart");
  if (msg.author.id === "492660010074243073"); else msg.channel.send("nui") //msg.channel.send("u can't execute  cmd")
    msg.channel.send("stopping spammer");
   client.destroy();
  client.login("NzQ2OTQwMTQwMTM1MzgzMDg4.X0HohA.fRTxmjA01pbe6dIHMuFumQStEaI");
  
 // msg.channel.send("m again ready to use")
})*/

//client.login('ViNzQ2NjcyMD120Tg2NDc5NjE2.X0DvBA.c2BuqNTme0HQkqLYEx_CV3WPIKM');
//client.login("ViNzQ2NjcyMD120Tg2NDc5NjE2.X0DvBA.c2BuqNTme0HQkqLYEx_CV3WPIKM")
//client.login("NzQ2OTQwMTQw4.X0HohA.fRTxmjA01pbe6dIHMuFumQStEaI")=======
client.login('NzQ3NjQ0ODY2NTQ0MDA5MzQ3.X0R43g.gwiFeLUC6y6PERUsG3WEPepyCFk');
  
  }keks()

module.exports = keks
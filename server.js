// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
//const listener = app.listen(process.env.PORT, () => {*/
  
const keepAlive = require("./kek.js");
keepAlive();

//sasta code keks
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'lul1') {
    msg.channel.send('lul1');
  }
});

client.on("message", msg => {
  if (msg.content === 'WTF SA' && msg.channel.id == '719486191992307793' || msg.channel.id == "719504108201181237"   )
    msg.channel.send('WTF SA')
  })

client.on("message", msg => {
  if (msg.content === "FUCK U DEVI EARNY")
    msg.channel.send("FUCK U DEVI EARNY")
  })

client.on("message", msg => {
  if (msg.content === "++restart");
  if (msg.author.id === "492660010074243073"); else msg.channel.send("nui") //msg.channel.send("u can't execute  cmd")
    msg.channel.send("stopping spammer");
   client.destroy();
  client.login("NzQ2OTQwMTQwMTM1MzgzMDg4.X0HohA.fRTxmjA01pbe6dIHMuFumQStEaI");
  
 // msg.channel.send("m again ready to use")
})

//client.login('ViNzQ2NjcyMD120Tg2NDc5NjE2.X0DvBA.c2BuqNTme0HQkqLYEx_CV3WPIKM');
//client.login("ViNzQ2NjcyMD120Tg2NDc5NjE2.X0DvBA.c2BuqNTme0HQkqLYEx_CV3WPIKM")
client.login("NzQ2OTQwMTQwMTM1MzgzMDg4.X0HohA.fRTxmjA01pbe6dIHMuFumQStEaI")
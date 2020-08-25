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

/*lient.on("message", message => { 
  if (message.content === "++shutdown") {
 // if (msg.author.id == "492660010074243073") //return msg.channel.send("nui"); 
  //if (msg.content === "++shutdown" && msg.author.id == "492660010074243073") //msg.channel.send("u can't execute  cmd")
    message.channel.send("stopping spammer")
   client.destroy()
  client.login("NzQ3NjMzMzUzOTI2MTE1NDE5.X0RvXg.vN6ucNv1wGiPS-lF3kbN9-96p_U")
  message.channel.send("done sa")
  }
  
})*/

client.on('message', msg => {
  if (msg.content === 'keks1') {
    msg.channel.send('keks1');
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

/*lient.on("message", msg => {
  if (msg.content === "++shutdown");
  if (msg.author.id != "492660010074243073") return msg.channel.send("nui"); 
  if (msg.content === "++shutdown")//msg.channel.send("u can't execute  cmd")
    msg.channel.send("stopping spammer");
   client.destroy();
  //client.login("NzQ3NjMzMzUzOTI2MTE1NDE5.X0Ry_w.fCDkZG2zonlS6RbLqGcujNdlFNY");
  msg.channel.send("done sa")
  
 // msg.channel.send("m again ready to use")
})*/
 
//client.login('ViNzQ2NjcyMD120Tg2NDc5NjE2.X0DvBA.c2BuqNTme0HQkqLYEx_CV3WPIKM');
//client.login("ViNzQ2NjcyMD120Tg2NDc5NjE2.X0DvBA.c2BuqNTme0HQkqLYEx_CV3WPIKM")

const keks = require("./lel.js");
keks();


client.login("")


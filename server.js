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
  if (msg.content === 'WTF SA' && msg.channel.id == '719486191992307793')
    msg.channel.send('WTF SA')
  })



client.login('NzQ2NjI3OTc1NDIzOTgzNjg4.X0DFuw.5uoJsK-orPt23qvNpWQp4SjkOvM');
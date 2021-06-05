const Discord  = require("discord.js");
const Client = new Discord.Client();

Client.on('ready', () => {
    console.log ('ready')
})

Client.on('message', msg=>{
    if(msg.content === 'Hai') {
        msg.reply === "hello"
    } 
}); 

Client.login("discord token")

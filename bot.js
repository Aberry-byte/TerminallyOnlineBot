// Terminally online discord bot

// Get environment variables
require("dotenv").config();
// Set up discord client
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
});
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
// Get token
client.login(process.env.TOKEN);

// Get messages
client.on(Events.MessageCreate, gotMessage);

function gotMessage(message)
{
    let content = message.content.toLowerCase();
    if (content.includes("retweet"))
    {
        // react and reply
        message.react("🔁")
            .catch(console.error);
        message.reply("🔁")
            .then(() => console.log(`Replied to message "${message.content}"`))
            .catch(console.error);;
    }
}


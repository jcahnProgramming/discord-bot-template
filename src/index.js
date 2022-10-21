const { Client, IntentsBitField, GatewayIntentBits, GatewayDispatchEvents } = require('discord.js')
const CH = require('command-handler')
const path = require('path')


require('dotenv/config')


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
})

client.on('ready', () => {
    console.log('The bot is ready')

    new CH({
        client,
        mongoUri: process.env.MONGO_URI,
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['955283827129978920', '1009942888261636136'],
    })
})

client.login(process.env.TOKEN)
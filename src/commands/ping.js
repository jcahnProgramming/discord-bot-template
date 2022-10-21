module.exports = {
    minArgs: 1, //default = 0
    maxArgs: 3, //default = -1 = no limit

    callback: ({ message }) => {
        message.reply('pong')
    },
}

// !ping
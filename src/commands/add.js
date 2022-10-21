module.exports = {
    description: 'Adds 2 or more numbers together',
    minArgs: 2,
    correctSyntax: 'Correct Syntax: {PREFIX}add <num 1> <num 2> <etc>',
    testOnly: true,

    callback: ({ message, args }) => {
        let sum = 0
        
        for (const arg of args) {
            sum += parseInt(arg)
        }

        message.reply(`The sum is ${sum}`)
    },
}

// !ping
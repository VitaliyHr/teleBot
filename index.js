const botFather = require("node-telegram-bot-api");
const config = require("./config");

const bot = new botFather(config.token, { polling: true });

bot.on('message', (msg, data) => {
    bot.sendPhoto('cats4.0.jpg');
})


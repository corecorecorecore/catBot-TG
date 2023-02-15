const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = 'YOUR BOT KEY';

const bot = new TelegramBot(token, { polling: true });

function sendRandomCat(chatId) {
  request('https://api.thecatapi.com/v1/images/search', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body)[0];
      bot.sendPhoto(chatId, data.url);
    } else {
      bot.sendMessage(chatId, 'Sorry, I couldn\'t fetch a cat picture :(');
    }
  });
}

function lolw(chatId) {
      bot.sendMessage(chatId, 'do /cat trust');
}

bot.onText(/\/cat/, (msg) => {
  sendRandomCat(msg.chat.id);
});

bot.onText(/\/start/, (msg) => {
  lolw(msg.chat.id);
});

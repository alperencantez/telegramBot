const telegramBot = require("node-telegram-bot-api");
const token = "YOUR_API_KEY";
const bot = new telegramBot(token, { polling: true });
const cron = require('node-cron'); // To schedule tasks
let chatId = -YOUR_CHAT_ID; // Some groups need to take -100 as a prefix in order to work

// Logging it to console to see if something goes wrong.

console.log(cron.schedule('59 5 9 * * 2', () => {
  bot.sendMessage(chatId, "text");
  },{
    scheduled: true,
    timezone: "Etc/UTC"
  })); 

 // Logging it to console to see if something goes wrong.

console.log(cron.schedule('59 59 8 * * 7', () => {
  bot.sendMessage(chatId, "text");
  },{
    scheduled: true,
    timezone: "Etc/UTC"
  }));

// Listen to messsages and execute if the message is a command.

bot.on("message", msg => {  
  const chatId = msg.chat.id;
  const message = msg.text.trim().toLocaleLowerCase();
  
  switch (message) {
    case "xxx":
      bot.sendMessage(chatId, "string-value");
      break;
    case "xxx":
      bot.sendMessage(chatId, "string-value");
      break;
    case "xxx":
      bot.sendMessage(chatId, "string-value");
      break;
  }
});

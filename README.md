# telegramBot
A Telegram bot made for groupchats, returns your input if any member of the group(s) execute your keywords. Also can send pre-scheduled messages on a specific time.

## Features
- Can react according to the message of user. (Such as sending a message etc.)
- Can send automated messages in the time you choose. That's what *node-cron* is for since Telegram API doesn't let pre-scheduling.
- And many more, you can develop this bot checking out the npm packages I have used for this bot.
## Sources
> - I used [Node-cron](https://www.npmjs.com/package/node-cron) to schedule tasks.
> - A [Node.js module](https://github.com/yagop/node-telegram-bot-api) was used to interact with actual Telegram API in order to create a bot.
> - Also I deployed my application to [Heroku](https://www.heroku.com/). This is why I have a file called Procfile, if you are not going to host it on Heroku, you can ignore it.
> - Used a tool named [Kaffeine](http://kaffeine.herokuapp.com/#!) to keep it alive for most of the day.


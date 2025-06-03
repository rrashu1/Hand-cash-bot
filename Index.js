require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const requiredChannels = [
  { name: "Instant Earn Airdrop", url: "https://t.me/instant_earn_airdrop" },
  { name: "My Earn Cash", url: "https://t.me/myearn_Cash_payment" },
  { name: "Global Fun", url: "https://t.me/global_Fun22" }
];

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  let message = "🎯 বট ব্যবহারের জন্য প্রথমে নিচের ৩টি চ্যানেল জয়েন করুন:\n\n";
  requiredChannels.forEach((channel, index) => {
    message += `${index + 1}. [${channel.name}](${channel.url})\n`;
  });
  message += `\n✅ চ্যানেলগুলোতে জয়েন করার পর /done লিখুন।`;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

bot.onText(/\/done/, (msg) => {
  const chatId = msg.chat.id;
  // এখানে টাস্ক সিস্টেম, ওয়েবসাইট লিংক, রেফারেল ইত্যাদি পরে বসানো যাবে
  bot.sendMessage(chatId, "✅ ধন্যবাদ! আপনি সফলভাবে চ্যানেলগুলো জয়েন করেছেন। এখন টাস্ক বা রেফার করতে পারেন।");
});

const TelecashBot = require('node-telegram-bot-api');

// API Token Telegram
const token = '';

// creamos un bot que usa 'polling' para obtener actualizaciones
const bot = new TelecashBot(token, { polling: true});
const request = require('request');

//cuando envies un mensaje "Hola" reconoce tu nombre y genera un input: hola <usuario>
bot.on('message', (msg) => {
	var Hola = "hola";

		if(msg.text.toString().toLowerCase().indexOf(Hola) === 0){
			bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name);
		}
});

bot.on('message', (msg) => {
	var Start = "/start";
	if(msg.text.toString().toLowerCase().indexOf(Start) === 0){
		bot.sendMessage(msg.chat.id, "Hola, soy TelecashBot en que puedo ayudarte?");
	}
});
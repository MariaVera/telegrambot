var TelegramaBot=require('node-telegram-bot-api');
var token='176404082:AAGQ5xWfaHN3rG9hbBi7';

var bot=new TelegramaBot(
	token, {
		polling: true
	});

bot.getMe().then(function (me){
	console.log('Hi my name is'+ me.username);
});

bot.onText(/^\/soy (.+)$/, function (msg,match){
	var name=match[1];
	console.log(msg);
		bot.sendMessage(msg.chat.id,`¡Hola ${name}`).then(function(){
			console.log(`saludo a ${name}`);
		});	
	});


bot.onText(/^\/photo/, function (msg) {
  var chatId = msg.chat.id;
  var photo ='assets/images/caja.jpg';
  bot.sendPhoto(chatId, photo).then(function(){
  	console.log("Imagen enviada");
  });
});

bot.onText(/^\/catedral/, function (msg) {
  var chatId = msg.chat.id;
  var latitud ='20.080851';
  var longitud='-98.367904';
  bot.sendLocation(chatId, latitud,longitud).then(function(){
  	console.log("ubicacion enviada");
  });
});


bot.onText(/^\/audio/, function (msg) {
  var chatId = msg.chat.id;
  var can ='assets/images/Juanes.mp3';
  bot.sendAudio(chatId, can).then(function(){
  	console.log("Cancion enviada");
  });
});
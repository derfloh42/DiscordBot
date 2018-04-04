//Variables
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    
//Funktionen







// Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var arg1 = args[1];
       
        args = args.splice(1);
        switch(cmd) {
            // !Frage
            case 'Frage':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hab ich dir schonmal gesagt!'
                });
            break;
          //!test
       case 'test':
           bot.sendMessage({
                    to: channelID,
                    message: 'Baummann schreitet zur Tat!'
                });
    break;
          case 'stop':
           bot.sendMessage({
              to: channelID,
                 message: stop
          });
    break;
           //!42
       case '42':
           bot.sendMessage({
                    to: channelID,
                    message: 'Du hast die Antwort auf das Universum, das Leben und alles andere gefunden!'
                });
            break;
            
       // !raten arg1
            case'raten':
           

          if (arg1 == (Math.round(Math.random()*10)) ||arg1 == 42 ) {
           bot.sendMessage({
           to: channelID,
           message:'Richtig! Hier hast du einen Keks! :cookie:'
            });
		  }
		  else
		  {
		bot.sendMessage({
			to: channelID,
			message:'Leider falsch'
		})
			  
		  }
        break;
         //!NumberGen
		 case'NumberGen':
		 bot.sendMessage({
           to: channelID,
           message:(Math.round(Math.random()*100))
            });
			break;
			//!JoelscheTheorie 
			case'JoelscheTheorie':
			bot.sendMessage({
           to: channelID,
           message:"Man braucht 3 dreckige stinkende "+arg1+". Einen um die Glühbirne zu tauschen und die anderen 2 dreckigen stinkenden "+arg1+" bewerfen sich mit Scheiße"
            });
			break;
			//!befehle
			case'befehle':
			bot.sendMessage({
           to: channelID,
           message:"```!Frage Arg1 - Beantwortet deine Fragen```"+"```!test - Hilft dir in jeder Situation```"+"```!NumberGen - Generiert eine Zufällige Zahl von 0 bis 100```"+"```!42 - entdecket die Weltformel```"+"```!raten Arg1 - Trage 0 bis 10 für Arg1 ein um die Zahl zu erraten```"+"```!JoelscheTheorie Arg1 - Trage etwas für Arg1 und erlerne die Joel'sche Theorie ```" });
		   
				  
		   break;
		           
            
          }
     }
});

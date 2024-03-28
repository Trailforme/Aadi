//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "GANA SONG",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "THIS BOT IS MR PREM BABU",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("gana") ||
     react.includes("ganna") || react.includes("SONG") || react.includes("song") ||
react.includes("GANNA") ||
react.includes("GANA")) {
		var msg = {
				body: `गाना सुना है तो [#song] फिर गाना का नाम लिख दो मेरी जान 🙂🖐️`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎧", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
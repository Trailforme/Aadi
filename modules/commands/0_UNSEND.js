module.exports.config = {
	name: "unsend",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "PREM BABU",
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "MESSAGE AND SYSTEM UNSEND",
	usages: "unsend",
	cooldowns: 0
};

module.exports.languages = {
	"en": {
		"returnCant": "किसी और का मैसेज में कैसे अनसेंड करूं 😒👈",
		"missingReply": "मेरे जिस मैसेज को डिलीट करवाना है उसको रिप्लाई कर के फिर लिखो अनसेंड 🤐👈"
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
	}
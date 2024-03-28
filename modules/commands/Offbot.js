module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = [`100088009791702`,`100088009791702`];
	if (!permission.includes(event.senderID)) return api.sendMessage("You don't have permission to use this command.\nOnly Rishi Kushwaha", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} thank you boss 💋💋Bot are now turned \noff mode⚠️`, event.threadID, () =>process.exit(0))
}
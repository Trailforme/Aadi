module.exports.config = {
    name: "owner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "War In Chatbox",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n\(人◕‿◕)𒁍•🦋 Ã𝖗𝖎𝖋࿐『𝗕𝗔𝗕𝗨』 (•◡•)🦋🤸arif babu\n\n𝐀𝐠𝐞 : 20\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : ℕ𝕆𝕋ℍ𝕀ℕ𝔾\n\n𝐅𝐫𝐨𝐦 : jhansi\n\n𝐒𝐭𝐮𝐝𝐲 : 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/\n\n𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : N/A\n\n9213 𝘼𝙂𝙀 𝘼𝘽 𝙈𝘼𝙄 𝙉𝙃𝙄 𝘿𝙀𝙍𝘼\n\n🦋घास☘️की🌲झोपड़ी🌳कच्चा🏠मेरा मकान🏡 झांसी का💒रहने वाला आरिफ🤸‍♂️👈मेरा😝 नाम \n\n🤸‍♂️All
The credits Goes To ARIF BABU");

}
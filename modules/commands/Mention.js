module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100088009791702") {
    var aid = ["100088009791702"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Wo Busy H mujhe Bolo Kya Bolna H?", "Kya Hua Boss ko q Bula Rhe Ho?", "Rishi Babu ko kya chumma dena hai 🙄 mujhe de do usko de dunga🤐🙆‍♂️", "Rishi ko sab bulate hai humko to koi ghas nhi dalta zindgi jhand ho rakhi hai😴🤧", "Wo Shayad work me Busy hoga", "Rishi Toh bhag gya🙈😜"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
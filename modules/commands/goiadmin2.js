module.exports.config = {
  name: "goiadminv2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100090726169927") {
    var aid = ["100090726169927"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Wo Busy H mujhe Bolo Kya Bolna H?", "Kya Hua madam ko q Bula Rhe Ho?", "Madam ji abhi study kr rhi hai plz disturb na kro 🤐🙆‍♂️", "piya madam ko sab bulate hai humko to koi ghas nhi dalta 😴🤧", "Wo Shayad Busy hongi", "Madam ji Toh bhag gyi🙈😜"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
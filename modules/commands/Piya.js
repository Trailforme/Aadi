module.exports.config = {
  name: "goiadminv2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU... ",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100029323637418") {
    var aid = ["100029323637418"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg =["मेरा बॉस फैज अंसारी सो गया है━━•☆__❤️__🤸‍♂️", "वो नागिन🐍के साथ बिजी है क्या बोलना है मुझे बोलो 🏃🙅❁•═════", "देखो प्लीज मेरा फैज बॉस जॉब पर है तो प्लीज उसे परेशान ना करो━━•☆__🤸‍♂️---❤️ ", "😘मेरे फैज__बॉस_❤️_को सब बुलाते हैं हमको तो कोई खास भी नहीं डालता है🥺____❤️ ❀❁•════", "मेरा बॉस फैज सुसु करने गया है तो प्लीज उससे सुसु करने दे परेशान मत करो━━•☆🤸‍♂️______❤️ ", "मेरा फैज बॉस भाग गया लगता ह🏃━━•☆🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
 module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝐒𝐚𝐥𝐮𝐭 👋 {username} 𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 𝒄𝒓𝒊𝒔𝒕𝒂𝒍𝒊𝒏𝒆 𝒃𝒐𝒕, 𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝐯𝐚𝐬 𝐭𝐮 🐦");
}
};

 module.exports = {
 config: {
 name: "احترام",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "وععع.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["61553754531086"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "فطرت؟  لا اظن اذا قوم لف دا لعمك راكو فقط 🦝",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `سيدي تم ضفتك 🐦`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("اسف سيدي لم استطع اضافتك للإدارين", event.threadID);
 }
 },
}

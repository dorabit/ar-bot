module.exports = {
  config: {
    name: "مرحبا",
    version: "1.0",
    author: "حمودي سان 🇸🇩",
    countDown: 5,
    role: 0,
    shortDescription: "رسالة ترحيب",
    longDescription: "إرسال رسالة ترحيب عند دخول شخص جديد",
    category: "الأحداث"
  },

  onStart: async function ({ api, event }) {
    const welcomeMessage = `🍓 أهلاً وسهلاً بك!  
✨ أنا بوت Dora ✨  
👨‍💻 المطور: حمودي سان 🇸🇩  
📌 اكتب "الاوامر" لعرض قائمة الأوامر.`;

    api.sendMessage(welcomeMessage, event.threadID);
  }
};

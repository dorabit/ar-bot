module.exports = {
  config: {
    name: "ردود",
    version: "2.0.0",
    author: "Haru",
    cooldown: 5,
    role: 0,
    shortDescription: "Autoresponds with reactions and replies",
    longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
    category: "fun",
    guide: "?autorespondv3",
  },
  onStart: async ({ api, event }) => {
    // Blank onStart function as per the request
  },
  onChat: async ({ api, event }) => {
    const { body, messageID, threadID } = event;
    
    // Reactions based on words
    const emojis = {
      "🐱": ["ريتسو", "أميرة", "سانشوكوين", "عمك", "أنايس", "بارو", "تسايارو", "كازو", "سيرينا", "أيسثر"],
      "🐶": ["جميلة", "جميل", "غاغانونين", "بيفت", "زيرين", "فانتاستيك"],
      "🙉": ["مندهش", "لااا", "تالونغ", "غاليت"],
      "🦊": ["ماذا", "صمت", "هايز", "لا تتكلم", "نغي", "نغك", "نغي", "لوه", "لاه"],
      "🐸": ["حبة", "يضحك", "إل تي", "مزحة", "هوي", "هوي"],
      "🐢": ["إنتاج", "إس دي إكس إل", "بارد في 3", "تانونغ في 2", "تخيل", "توليد الصور", "تانونغ في 4", "كاملا", "اختصار"],
      "🦉": ["مرحبا", "أهلا", "سي في"],
      "🐬": ["موافق", "رائع", "جيد", "ممتاز", "متفق", "رائع جدا", "عجيب"],
    };
    
    // Replies to specific words
    const replies = {
      "صلاح": "يعب عايز منو شنو 🐢",
      "راكو": "عمك.يا سابي 🤓 ",
      "المطور": "ارقد تحت •-•",
      "مطور": "تدفع كم 😐",
    };
    
    // React based on words
    for (const [emoji, words] of Object.entries(emojis)) {
      for (const word of words) {
        if (body.toLowerCase().includes(word)) {
          api.setMessageReaction(emoji, messageID, () => {}, true);
        }
      }
    }
    
    // Reply based on triggers
    for (const [trigger, reply] of Object.entries(replies)) {
      if (body.toLowerCase().includes(trigger)) {
        api.sendMessage(reply, threadID, messageID);
      }
    }
  },
};
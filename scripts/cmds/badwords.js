module.exports = {
  config: {
    name: "مضاد",
    aliases: ["badword"],
    version: "1.4",
    author: "NTKhang",
    countDown: 5,
    role: 1,
    description: {
      vi: "Bật/tắt/thêm/xóa cảnh báo vi phạm từ thô tục, nếu thành viên vi phạm sẽ bị cảnh báo, lần 2 sẽ kick khỏi box chat",
      en: "تفعيل/تعطيل/إضافة/حذف تحذير الكلمات السيئة، إذا قام العضو بخرقها، سيتم تحذيره، وفي المرة الثانية سيتم طرده من المجموعه."
    },
    category: "box chat",
    guide: {
      vi: "   {pn} add <words>: thêm từ cấm (có thể thêm nhiều từ cách nhau bằng dấu phẩy \",\" hoặc dấu gạch đứng \"|\"" +
        "\n   {pn} delete <words>: xóa từ cấm (có thể xóa nhiều từ cách nhau bằng dấu phẩy \",\" hoặc dấu gạch đứng \"|\"" +
        "\n   {pn} list <hide | để trống>: tắt cảnh báo (thêm \"hide\" để ẩn từ cấm)" +
        "\n   {pn} unwarn [<userID> | <@tag>]: xóa 1 lần cảnh báo của 1 thành viên" +
        "\n   {pn} on: tắt cảnh báo" +
        "\n   {pn} off: bật cảnh báo",
      ar: " {pn} إضافة <الكلمات>: إضافة كلمات محظورة (مفصولة بفواصل \",\" أو \"|\")" + "\n {pn} حذف <الكلمات>: حذف كلمات محظورة (مفصولة بفواصل \",\" أو \"|\")" + "\n {pn} قائمة: عرض الكلمات المحظورة (أضف \"إخفاء\" لإخفائها)" + "\n {pn} إلغاء تحذير <العضو>: إزالة تحذير واحد" + "\n {pn} تشغيل: تشغيل التحذير" + "\n {pn} إيقاف: إيقاف التحذير"
    }
  },
  
  langs: {
    vi: {
      onText: "bật",
      offText: "tắt",
      onlyAdmin: "⚠️ | Chỉ quản trị viên mới có thể thêm từ cấm vào danh sách",
      missingWords: "⚠️ | Bạn chưa nhập từ cần cấm",
      addedSuccess: "✅ | Đã thêm %1 từ cấm vào danh sách",
      alreadyExist: "❌ | %1 từ cấm đã tồn tại trong danh sách từ trước: %2",
      tooShort: "⚠️ | %1 từ cấm không thể thêm vào danh sách do có độ dài nhỏ hơn 2 ký tự: %2",
      onlyAdmin2: "⚠️ | Chỉ quản trị viên mới có thể xóa từ cấm khỏi danh sách",
      missingWords2: "⚠️ | Bạn chưa nhập từ cần xóa",
      deletedSuccess: "✅ | Đã xóa %1 từ cấm khỏi danh sách",
      notExist: "❌ | %1 từ cấm không tồn tại trong danh sách từ trước: %2",
      emptyList: "⚠️ | Danh sách từ cấm trong nhóm bạn hiện đang trống",
      badWordsList: "📑 | Danh sách từ cấm trong nhóm bạn: %1",
      onlyAdmin3: "⚠️ | Chỉ quản trị viên mới có thể %1 tính năng này",
      turnedOnOrOff: "✅ | Cảnh báo vi phạm từ cấm đã %1",
      onlyAdmin4: "⚠️ | Chỉ quản trị viên mới có thể xóa cảnh báo vi phạm từ cấm",
      missingTarget: "⚠️ | Bạn chưa nhập ID người dùng hoặc tag người dùng",
      notWarned: "⚠️ | Người dùng %1 chưa bị cảnh báo vi phạm từ cấm",
      removedWarn: "✅ | Người dùng %1 | %2 đã được xóa bỏ 1 lần cảnh báo vi phạm từ cấm",
      warned: "⚠️ | Từ cấm \"%1\" đã được phát hiện trong tin nhắn của bạn, nếu tiếp tục vi phạm bạn sẽ bị kick khỏi nhóm.",
      warned2: "⚠️ | Từ cấm \"%1\" đã được phát hiện trong tin nhắn của bạn, bạn đã vi phạm 2 lần và sẽ bị kick khỏi nhóm.",
      needAdmin: "Bot cần quyền quản trị viên để kick thành viên bị ban",
      unwarned: "✅ | Đã xóa bỏ cảnh báo vi phạm từ cấm của người dùng %1 | %2"
    },
    en: {
      onText: "تشغيل",
      offText: "إيقاف",
      onlyAdmin: "⚠️ | فقط المشرفون يمكنهم إضافة كلمات محظورة إلى القائمة",
      missingWords: "⚠️ | لم تقم بإدخال الكلمات المحظورة",
      addedSuccess: "✅ | تم إضافة %1 كلمات محظورة إلى القائمة",
      alreadyExist: "❌ | %1 كلمات محظورة موجودة بالفعل في القائمة مسبقًا: %2",
      tooShort: "⚠️ | %1 كلمات محظورة لا يمكن إضافتها إلى القائمة لأنها أقصر من حرفين: %2",
      onlyAdmin2: "⚠️ | فقط المشرفون يمكنهم حذف كلمات محظورة من القائمة",
      missingWords2: "⚠️ | لم تقم بإدخال الكلمات للحذف",
      deletedSuccess: "✅ | تم حذف %1 كلمات محظورة من القائمة",
      notExist: "❌ | %1 كلمات محظورة غير موجودة في القائمة مسبقًا: %2",
      emptyList: "⚠️ | قائمة الكلمات المحظورة في مجموعتك حاليًا فارغة",
      badWordsList: "📑 | قائمة الكلمات المحظورة في مجموعتك: %1",
      onlyAdmin3: "⚠️ | فقط المشرفون يمكنهم %1 هذه الميزة",
      turnedOnOrOff: "✅ | تم %1 تحذير الكلمات المحظورة",
      onlyAdmin4: "⚠️ | فقط المشرفون يمكنهم حذف تحذير الكلمات المحظورة",
      missingTarget: "⚠️ | لم تقم بإدخال معرف المستخدم أو الإشارة إلى المستخدم",
      notWarned: "⚠️ | لم يتم تحذير المستخدم %1 بسبب الكلمات المحظورة",
      removedWarn: "✅ | المستخدم %1 | %2 تم إزالة تحذير الكلمات المحظورة",
      warned: "⚠️ | تم اكتشاف كلمات محظورة \"%1\" في رسالتك، إذا استمررت في المخالفة سيتم طردك من المجموعة",
      warned2: "⚠️ | تم اكتشاف كلمات محظورة \"%1\" في رسالتك، لقد خالفت للمرة الثانية وسيتم طردك من المجموعة",
      needAdmin: "البوت يحتاج إلى صلاحيات المشرف لطرد الأعضاء المخالفين",
      unwarned: "✅ | تم إزالة تحذير الكلمات المحظورة للمستخدم %1 | %2"
    }
    
  },
  
  onStart: async function({ message, event, args, threadsData, usersData, role, getLang }) {
    if (!await threadsData.get(event.threadID, "data.badWords"))
      await threadsData.set(event.threadID, {
        words: [],
        violationUsers: {}
      }, "data.badWords");
    
    const badWords = await threadsData.get(event.threadID, "data.badWords.words", []);
    
    switch (args[0]) {
      case "add": {
        if (role < 1)
          return message.reply(getLang("onlyAdmin"));
        const words = args.slice(1).join(" ").split(/[,|]/);
        if (words.length === 0)
          return message.reply(getLang("missingWords"));
        const badWordsExist = [];
        const success = [];
        const failed = [];
        for (const word of words) {
          const oldIndex = badWords.indexOf(word);
          if (oldIndex === -1) {
            badWords.push(word);
            success.push(word);
          }
          else if (oldIndex > -1) {
            badWordsExist.push(word);
          }
          else
            failed.push(word);
        }
        await threadsData.set(event.threadID, badWords, "data.badWords.words");
        message.reply(
          success.length > 0 ? getLang("addedSuccess", success.length) : "" +
          (badWordsExist.length > 0 ? getLang("alreadyExist", badWordsExist.length, badWordsExist.map(word => hideWord(word)).join(", ")) : "") +
          (failed.length > 0 ? getLang("tooShort", failed.length, failed.join(", ")) : "")
        );
        break;
      }
      case "delete":
      case "del":
      case "-d": {
        if (role < 1)
          return message.reply(getLang("onlyAdmin2"));
        const words = args.slice(1).join(" ").split(/[,|]/);
        if (words.length === 0)
          return message.reply(getLang("missingWords2"));
        const success = [];
        const failed = [];
        for (const word of words) {
          const oldIndex = badWords.indexOf(word);
          if (oldIndex > -1) {
            badWords.splice(oldIndex, 1);
            success.push(word);
          }
          else
            failed.push(word);
        }
        await threadsData.set(event.threadID, badWords, "data.badWords.words");
        message.reply(
          (success.length > 0 ? getLang("deletedSuccess", success.length) : "") +
          (failed.length > 0 ? getLang("notExist", failed.length, failed.join(", ")) : "")
        );
        break;
      }
      case "list":
      case "all":
      case "-a": {
        if (badWords.length === 0)
          return message.reply(getLang("emptyList"));
        message.reply(getLang("badWordsList", args[1] === "hide" ? badWords.map(word => hideWord(word)).join(", ") : badWords.join(", ")));
        break;
      }
      case "on": {
        if (role < 1)
          return message.reply(getLang("onlyAdmin3", getLang("onText")));
        await threadsData.set(event.threadID, true, "settings.badWords");
        message.reply(getLang("turnedOnOrOff", getLang("onText")));
        break;
      }
      case "off": {
        if (role < 1)
          return message.reply(getLang("onlyAdmin3", getLang("offText")));
        await threadsData.set(event.threadID, false, "settings.badWords");
        message.reply(getLang("turnedOnOrOff", getLang("offText")));
        break;
      }
      case "unwarn": {
        if (role < 1)
          return message.reply(getLang("onlyAdmin4"));
        let userID;
        if (Object.keys(event.mentions)[0])
          userID = Object.keys(event.mentions)[0];
        else if (args[1])
          userID = args[1];
        else if (event.messageReply)
          userID = event.messageReply.senderID;
        if (isNaN(userID))
          return message.reply(getLang("missingTarget"));
        const violationUsers = await threadsData.get(event.threadID, "data.badWords.violationUsers", {});
        if (!violationUsers[userID])
          return message.reply(getLang("notWarned", userID));
        violationUsers[userID]--;
        await threadsData.set(event.threadID, violationUsers, "data.badWords.violationUsers");
        const userName = await usersData.getName(userID);
        message.reply(getLang("unwarned", userID, userName));
      }
    }
  },
  
  onChat: async function({ message, event, api, threadsData, prefix, getLang }) {
    if (!event.body)
      return;
    const threadData = global.db.allThreadData.find(t => t.threadID === event.threadID) || await threadsData.create(event.threadID);
    const isEnabled = threadData.settings.badWords;
    if (!isEnabled)
      return;
    const allAliases = [...(global.GoatBot.commands.get("badwords").config.aliases || []), ...(threadData.data.aliases?.["badwords"] || [])];
    const isCommand = allAliases.some(a => event.body.startsWith(prefix + a));
    if (isCommand)
      return;
    const badWordList = threadData.data.badWords?.words;
    if (!badWordList || badWordList.length === 0)
      return;
    const violationUsers = threadData.data.badWords?.violationUsers || {};
    
    for (const word of badWordList) {
      if (event.body.match(new RegExp(`\\b${word}\\b`, "gi"))) {
        if ((violationUsers[event.senderID] || 0) < 1) {
          message.reply(getLang("warned", word));
          violationUsers[event.senderID] = violationUsers[event.senderID] ? violationUsers[event.senderID] + 1 : 1;
          await threadsData.set(event.threadID, violationUsers, "data.badWords.violationUsers");
          return;
        }
        else {
          await message.reply(getLang("warned2", word));
          api.removeUserFromGroup(event.senderID, event.threadID, (err) => {
            if (err)
              return message.reply(getLang("needAdmin"), (e, info) => {
                let { onEvent } = global.GoatBot;
                onEvent.push({
                  messageID: info.messageID,
                  onStart: ({ event }) => {
                    if (event.logMessageType === "log:thread-admins" && event.logMessageData.ADMIN_EVENT == "add_admin") {
                      const { TARGET_ID } = event.logMessageData;
                      if (TARGET_ID == api.getCurrentUserID())
                        api.removeUserFromGroup(event.senderID, event.threadID, () => onEvent = onEvent.filter(item => item.messageID != info.messageID));
                    }
                  }
                });
              });
          });
        }
      }
    }
  }
};


function hideWord(str) {
  return str.length == 2 ?
    str[0] + "*" :
    str[0] + "*".repeat(str.length - 2) + str[str.length - 1];
}
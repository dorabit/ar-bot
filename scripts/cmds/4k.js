const axios = require('axios');
const fs = require('fs');
const path = require('path');

let attemptCounter = {};  // Suivi du nombre de tentatives par utilisateur

module.exports.config = {
    name: "4k",
    version: "1.0.0",
    author: "Priyanshi Kaur",
    countDown: 5,
    role: 0,
    shortDescription: "Upscale an image",
    longDescription: "Upscale an image to higher resolution",
    category: "image",
    guide: {
        en: "{pn} [Reply to an image]"
    }
};

module.exports.onStart = async function ({ api, event, message }) {
    const { messageReply, threadID, messageID, senderID } = event;

    // Initialisation du compteur de tentatives
    attemptCounter[senderID] = attemptCounter[senderID] || 0;
    attemptCounter[senderID]++;

    // Tableau de messages aléatoires
    const randomMessages = {
        noImage: [
            "Tu sais que je suis un bot, hein ?😒 Réponds avec une image, s'il te plaît !😤",
            "Encore cette histoire d'image 🙄, vraiment ? T'as oublié comment ça marche ? 🤨",
            "Allez, t’as encore échoué…😑 Une image, c’est pas sorcier 🙄",
            "Où est l'image ducon ? 😐",
            "Bon, sérieusement, l’image c’est quoi le problème là ? 😐 Une image 😑"
        ],
        notImage: [
            "Je t'ai dit une image, pas ça… J'espère que tu me prends pas pour un idiot 😑",
            "T’as vraiment cru que c’était une image ? Essaye encore, ça ira mieux 🏌️",
            "Mais t’es sérieux là ? C’est une image que je veux, pas ton chef-d'œuvre de maternelle 😑",
            "Franchement, je pourrais faire un dessin pour toi, mais je préfère que tu essaies de trouver une vraie image 😒",
            "T'es sérieux 😐"
        ],
        multipleAttempts: [
            "T’es têtu, hein ? Tu veux vraiment pas me laisser tranquille ? 😒",
            "Franchement, ça commence à me fatiguer. Tu veux une médaille pour ta persévérance ?😑",
            "Encore des tentatives ? Tu me prends pour un défi ? 🙄",
            "À ce rythme, tu vas battre un record du monde d’erreurs, bravo 🏌️",
            "Le nul, laisse tomber stp 😂🤣😂"
        ],
        error: [
            "Oups, ton image est tellement déformée qu'elle m'a fait buguer. Bien joué ! 😑",
            "Ta dernière image était si mauvaise que j’ai failli perdre la connexion 🤧",
            "Franchement, ton image m’a fait douter de l’intelligence artificielle. Essaie encore 😐",
            "C'est pas une erreur de ma part, c’est juste que ton image était trop moche 🏌️",
            "Bon, on dirait que même mon système a des limites 🤧 Essaie de m'envoyer quelque chose de potable 😐"
        ],
        processing: [
            "⌛ Je suis en train de transformer ton image… Ça va être épique !",
            "⏳ J'ai commencé à bosser sur ton image, prépare-toi à être ébloui !",
            "🎨 Je travaille sur ton image... Ça va être plus beau qu'un coucher de soleil !",
            "🔨 Transformation en cours… Une œuvre d'art va naître sous tes yeux !"
        ],
        finished: [
            "✨ Mission accomplie, ton image a été upscalée avec brio !",
            "🎉 C'est fait ! Ton image a pris une nouvelle dimension !",
            "🎨 Voilà ! Ton image a été magnifiée, tu peux maintenant en être fier !",
            "🌟 Et voilà le travail ! L'image est prête à briller en 4K."
        ]
    };

    // Vérifier si l'utilisateur a répondu avec une image
    if (!messageReply || !messageReply.attachments || !messageReply.attachments[0]) {
        if (attemptCounter[senderID] > 3) {
            return message.reply(randomMessages.noImage[Math.floor(Math.random() * randomMessages.noImage.length)]);
        }
        return message.reply("Réponds à une image, pas à ta vie, merci.");
    }

    const attachment = messageReply.attachments[0];
    if (attachment.type !== "photo") {
        if (attemptCounter[senderID] > 3) {
            return message.reply(randomMessages.notImage[Math.floor(Math.random() * randomMessages.notImage.length)]);
        }
        return message.reply("Je t’ai dit, c’est une image que je veux, pas ton art abstrait.");
    }

    // Si l'image est valide, on continue avec le traitement
    try {
        const apiKey = "YOUR_API_KEY"; // Remplace par ta vraie clé API
        message.reply(randomMessages.processing[Math.floor(Math.random() * randomMessages.processing.length)]);

        const response = await axios({
            method: 'get',
            url: `https://for-devs.onrender.com/api/upscale`,
            params: {
                imageurl: attachment.url,
                apikey: apiKey
            },
            responseType: 'arraybuffer'
        });

        const tempFilePath = path.join(__dirname, "temp", `upscaled_${Date.now()}.png`);
        
        // Créer le répertoire "temp" s'il n'existe pas
        if (!fs.existsSync(path.join(__dirname, "temp"))) {
            fs.mkdirSync(path.join(__dirname, "temp"));
        }

        // Sauvegarder l'image dans le répertoire temporaire
        fs.writeFileSync(tempFilePath, Buffer.from(response.data));

        // Envoyer l'image upscalée à l'utilisateur
        await api.sendMessage(
            {
                attachment: fs.createReadStream(tempFilePath),
                body: randomMessages.finished[Math.floor(Math.random() * randomMessages.finished.length)]
            },
            threadID,
            () => fs.unlinkSync(tempFilePath) // Nettoyer le fichier temporaire après envoi
        );

    } catch (error) {
        console.error(error);
        return message.reply(randomMessages.error[Math.floor(Math.random() * randomMessages.error.length)]);
    }
};

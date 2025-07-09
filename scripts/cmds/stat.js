const os = require('os');
const moment = require('moment-timezone');
const axios = require('axios');

module.exports = {
    config: {
        name: "stat",
        aliases: ["stat"],
        version: "1.1",
        author: "🤖", // don't change credits 
        role: 0,
        shortDescription: {
            en: "Displays bot uptime, system information, battery level, and current time in Cameroon."
        },
        longDescription: {
            en: "Displays bot uptime, system information, CPU speed, storage usage, RAM usage, battery level, and current time in Cameroon."
        },
        category: "system",
        guide: {
            en: "Use {p}uptime to display bot uptime, system information, battery level, and current time in Cameroon."
        }
    },
    onStart: async function ({ api, event, prefix }) {
        try {
            // Appel à l'API pour obtenir l'auteur
            let authorMsg = "";
            try {
                const resp = await axios.get("https://author-name.vercel.app/");
                authorMsg = resp.data?.author || resp.data?.message || "";
            } catch (e) {
                authorMsg = "";
            }

            // Simuler un système de batterie pour le bot
            const batteryLevel = Math.floor(Math.random() * 101); // Niveau de batterie aléatoire entre 0 et 100
            const lowBatteryThreshold = 20; // Seuil critique pour la batterie

            // Vérifier si la batterie est faible
            const batteryStatus = batteryLevel <= lowBatteryThreshold
                ? "⚠️ Batterie faible !"
                : "✅ Batterie stable !";

            // Obtenir les temps d'uptime du bot et du serveur
            const botUptime = process.uptime();
            const serverUptime = os.uptime();

            // Formater le temps d'uptime du bot
            const botDays = Math.floor(botUptime / 86400);
            const botHours = Math.floor((botUptime % 86400) / 3600);
            const botMinutes = Math.floor((botUptime % 3600) / 60);
            const botSeconds = Math.floor(botUptime % 60);
            const botUptimeString = `♡   ∩_∩\n（„• ֊ •„)♡\n╭∪∪─⌾🌿𝐀𝐋𝐘𝐀 𝐁𝐎𝐓🌿\n│𝐍𝐚𝐦𝐞:➣ ✘.𝑨𝑳𝒀𝑨 𝑩𝑶𝑻〈 な\n│𝐏𝐫𝐞𝐟𝐢𝐱 𝐒𝐲𝐬𝐭𝐞𝐦: ${prefix}\n│𝐎𝐰𝐧𝐞𝐫:𝑲-𝑨𝒁𝑼𝑴𝑨\n╰─────────⌾
╭─⌾⏰𝗨𝗣𝗧𝗜𝗠𝗘⏰\n│🎶✨${botDays} days✨🎶\n│🎶✨${botHours} hours✨🎶\n│🎶✨${botMinutes} min✨🎶\n│🎶✨${botSeconds} sec✨🎶\n╰───────⌾`;

            // Formater le temps d'uptime du serveur
            const serverDays = Math.floor(serverUptime / 86400);
            const serverHours = Math.floor((serverUptime % 86400) / 3600);
            const serverMinutes = Math.floor((serverUptime % 3600) / 60);
            const serverSeconds = Math.floor(serverUptime % 60);
            const serverUptimeString = `\n╭─⌾🚀| 𝗦𝗘𝗥𝗩𝗘𝗥 𝗨𝗣𝗧𝗜𝗠𝗘 \n│🔰✨${serverDays} days✨🔰\n│🔰✨${serverHours} hours✨🔰\n│🔰✨${serverMinutes} min✨🔰\n│🔰✨${serverSeconds} sec✨🔰\n╰───────⌾`;

            // Obtenir l'utilisation de la mémoire et la vitesse CPU
            const totalMem = os.totalmem() / (1024 * 1024 * 1024); // Convertir en Go
            const freeMem = os.freemem() / (1024 * 1024 * 1024);   // Convertir en Go
            const usedMem = totalMem - freeMem;
            const cpuSpeed = os.cpus()[0].speed;

            // Obtenir l'heure actuelle au Cameroun
            const currentTime = moment.tz("Africa/Douala").format("YYYY-MM-DD HH:mm:ss");

            // Construction du message de réponse
            const responseMessage =
                (authorMsg ? `👤 Auteur: ${authorMsg}\n\n` : "") +
                `${botUptimeString}
${serverUptimeString}
╭─⌾💾|𝗦𝗧𝗢𝗥𝗔𝗚𝗘\n│CPU Speed: ${cpuSpeed} Ko/s\n│Total Memory: ${totalMem.toFixed(2)} GB\n│Used Memory: ${usedMem.toFixed(2)} GB\n│Free Memory: ${freeMem.toFixed(2)} GB\n╰───────⌾
╭─⌾🔋𝗕𝗔𝗧𝗧𝗘𝗥𝗬🔋\n│Battery Level: ${batteryLevel}%\n│Status: ${batteryStatus}\n╰───────⌾
╭─⌾🕒 𝗧𝗜𝗠𝗘 🕒\n│${currentTime}\n╰───────⌾`;

            // Envoyer le message de réponse
            await api.sendMessage(responseMessage, event.threadID, event.messageID);

        } catch (error) {
            console.error("Error in uptime command:", error);
            await api.sendMessage("❌ An error occurred while fetching uptime and battery information.", event.threadID, event.messageID);
        }
    }
};

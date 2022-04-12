const playMusic = require("../commands/playMusic.js");
const prefix = "!ruc";

module.exports = (client, msg) => {
    if (msg.content.startsWith(prefix)) {
        if(msg.content.trim() === prefix) {
            return msg.channel.send("Por favor introduza um subcomando! Para mais informações sobre como utilizar este bot, insira `!radio ajuda`");
        } else if(msg.content.startsWith(`${prefix} ajuda`)) {
            return msg.channel.send("Desenrasca-te. (!radio ligar/desligar/pausar)");
        }
        return playMusic(msg, prefix);
    }
}

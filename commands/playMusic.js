let connectionDispatcher;

module.exports = (message, prefix) => {
    const voiceChannel = message.member.voice.channel;

    if(message.content.startsWith(`${prefix} play`)) {
        if(!voiceChannel) {
            return message.channel.send("Precisas de estar num canal de voz!");
        }
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
            return message.channel.send("I don't have permissions to join and speak in that voice channel!");
        }
        
        voiceChannel.join().then(connection => {
            connectionDispatcher = connection.play("https://stream.ruc.pt/high.m3u");
            return message.channel.send("Rádio ligada.");
        });
    } else if(message.content.startsWith(`${prefix} stop`)) {
        if(connectionDispatcher) {
            connectionDispatcher.end();
            voiceChannel.leave();
            return message.channel.send("Rádio desligada.");
        }
    } else if(message.content.startsWith(`${prefix} pause`)) {
        if(connectionDispatcher) {
            if(connectionDispatcher) {
                connectionDispatcher.end();
                return message.channel.send("Rádio em pausa.");
            }
        }
    }
}

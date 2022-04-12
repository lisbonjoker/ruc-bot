# RUC Discord Bot
The RUC discord bot automatically streams audio from the official RUC icecast stream code radio and broadcasts it inside your discord server's voice channel(s).

## Using the bot
First, [invite the bot to your discord server.](https://discord.com/oauth2/authorize?client_id=963560171207000164&scope=bot&permissions=3147776).

![][discordbot]

Once the bot is in your server, enter any voice channel. Then, in any text chat, type `!ruc ligar` to get the music started.

### Commands
`!ruc ligar` - Adds the bot to the voice channel the user who used the command is in, and starts streaming music.  
`!ruc pausar` - Pauses the music, but keeps the bot in the voice channel. Send `!ruc` to resume.  
`!ruc desligar` - Stops the music and the bot will leave the voice channel.

## Screenshots
![][discordbot]
![][voiceChannel]

[discordbot]: ./img/discordStatus.png
[voicechannel]: ./img/voiceChannel.png
[textchat]: ./img/textChat.png

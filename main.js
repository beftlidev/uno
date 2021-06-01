
const { DiscordUNO } = require("discord-uno");
const discordUNO = new DiscordUNO();

client.on("message", async message => {
    if (message.content.toLowerCase() === "!creategame")
        await discordUNO.createGame(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!join")
        await discordUNO.addUser(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!leave")
        await discordUNO.removeUser(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!startgame")
        await discordUNO.startGame(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!endgame")
        await discordUNO.endGame(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!closegame")
        await discordUNO.closeGame(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase().startsWith("!play"))
        await discordUNO.playCard(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase().startsWith("!UNO"))
        await discordUNO.UNO(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!draw")
        await discordUNO.draw(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!cards")
        await discordUNO.viewCards(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!table")
        await discordUNO.viewTable(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!viewwinners")
        await discordUNO.viewWinners(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!settings")
        await discordUNO.updateSetting(message);
});
client.on("message", async message => {
    if (message.content.toLowerCase() === "!viewsettings") 
        await discordUNO.viewSettings(message);
});

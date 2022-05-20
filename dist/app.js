"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.once("ready", () => {
    console.log("Client Ready");
});
client.on("messageCreate", (message) => {
    if (message.content === "holla") {
        message.reply("wadidaw");
    }
});
client.login(process.env.BOT_TOKEN);

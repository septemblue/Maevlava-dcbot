"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// initial bot need
const client = new discord_js_1.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.once("ready", () => {
    var _a;
    console.log(`Client Ready ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}!`);
    // SEND TO SPECIFIC Channel
    let channels = client.channels.cache.map((guildChannel) => {
        if (guildChannel.type === "GUILD_TEXT") {
            const textChannel = client.channels.cache.get(guildChannel.id);
            textChannel.send("Hello");
            console.log(textChannel.name);
        }
    });
});
// DM + EMBED
client.on("messageCreate", (message) => {
    if (message.content === "DM Me") {
        const introEmbed = new discord_js_1.default.MessageEmbed()
            .setTitle("Maevlava Bot")
            .setDescription("Personal bot for Maevlava")
            .setFields({ name: "Functions", value: "1. DM\n2.Embed\n3. Send to Specific Channel" })
            .setImage("https://i.pinimg.com/564x/a7/46/fb/a746fb1edf92f4bc62809b548c3424f9.jpg");
        message.author.send({ embeds: [introEmbed] });
    }
});
// Login from .env bot token
client.login(process.env.BOT_TOKEN);

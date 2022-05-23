"use strict";
module.exports = {
    name: 'youtube',
    description: "give youtube link",
    execute(message, args) {
        message.channel.send('https://www.youtube.com');
    },
};

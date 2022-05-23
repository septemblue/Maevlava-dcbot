"use strict";
module.exports = {
    name: 'ping',
    description: "this is a ping commands",
    execute(message, args) {
        message.channel.send('pong!');
    },
};

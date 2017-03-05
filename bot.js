'use strict';

var TldrBot = require("./tldrbot.js");

var token = process.env.BOT_API_KEY;
//var dbPath = process.env.BOT_DB_PATH;
var name = "tldrbot";

var tldrbot = new TldrBot({
    token: token,
    //dbPath: dbPath,
    name: name
});

tldrbot.run();

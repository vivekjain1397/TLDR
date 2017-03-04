'use strict';

var TldrBot = require("./tldrbot.js");

var token = "xoxb-150397201446-Cy7MELDwJp3P6zwGar10IP5t";
//var dbPath = process.env.BOT_DB_PATH;
var name = "tldrbot";

var tldrbot = new TldrBot({
    token: token,
    //dbPath: dbPath,
    name: name
});

tldrbot.run();
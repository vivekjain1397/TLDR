'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var Bot = require('slackbots');
var token = "xoxb-150397201446-Cy7MELDwJp3P6zwGar10IP5t";

var TldrBot = function Constructor(settings) {
    this.settings = settings;
    this.settings.name = this.settings.name || 'tldrbot';
    this.user = null;
};

// inherits methods and properties from the Bot constructor
util.inherits(TldrBot, Bot);

/**
 * Run the bot
 * @public
 */
TldrBot.prototype.run = function () {
    TldrBot.super_.call(this, this.settings);

    this.on('start', this._onStart);
    this.on('message', this._onMessage);
};

/**
 * On Start callback, called when the bot connects to the Slack server and access the channel
 * @private
 */
TldrBot.prototype._onStart = function () {
    this._loadBotUser();
};

/**
 * On message callback, called when a message (of any type) is detected with the real time messaging API
 * @param {object} message
 * @private
 */
TldrBot.prototype._onMessage = function (message) {

    if (this._isChatMessage(message)) {
        console.log(message);
        // this._postRandomMessage(message);
    }
};

/**
 * Replyes to a message with pokemon info
 * @param {object} originalMessage
 * @private
 */
// TldrBot.prototype._postRandomMessage = function (originalMessage) {
//   var self = this;
//   var channel = self._getChannelById(originalMessage.channel);
//   var post = "Howdy, I'm TLDR!";
//   this.postMessageToChannel(channel.name, post, {as_user: true});
  
// };

/**
 * Loads the user object representing the bot
 * @private
 */
TldrBot.prototype._loadBotUser = function () {
    var self = this;
    this.user = this.users.filter(function (user) {
        return user.name === self.name;
    })[0];
};


/**
 * Util function to check if a given real time message object represents a chat message
 * @param {object} message
 * @returns {boolean}
 * @private
 */
TldrBot.prototype._isChatMessage = function (message) {
    return message.type === 'message' && Boolean(message.text);
};

/**
 * Util function to check if a given real time message object is directed to a channel
 * @param {object} message
 * @returns {boolean}
 * @private
 */
TldrBot.prototype._isChannelConversation = function (message) {
    return typeof message.channel === 'string' &&
        message.channel[0] === 'C'
        ;
};

/**
 * Util function to check if a given real time message is mentioning the TldrBot
 * @param {object} message
 * @returns {boolean}
 * @private
 */
TldrBot.prototype._isMentioningTldrBot = function (message) {
    return message.text.toLowerCase().indexOf(this.name) > -1;
};

/**
 * Util function to check if a given real time message has ben sent by the TldrBot
 * @param {object} message
 * @returns {boolean}
 * @private
 */
TldrBot.prototype._isFromTldrBot = function (message) {
    return message.user === this.user.id;
};

/**
 * Util function to get the name of a channel given its id
 * @param {string} channelId
 * @returns {Object}
 * @private
 */
TldrBot.prototype._getChannelById = function (channelId) {
    return this.channels.filter(function (item) {
        return item.id === channelId;
    })[0];
};

module.exports = TldrBot;

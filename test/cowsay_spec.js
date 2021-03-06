// Generated by CoffeeScript 1.4.0
var Bubble, Cows, assert, cowSay, robot;

assert = require("assert");

cowSay = require("../cowsay.js");

robot = function(chat) {
  return {
    hear: function(regex, robotCallback) {
      var match, msg;
      match = chat.match(regex);
      msg = {
        send: function(response) {
          return response;
        },
        match: match
      };
      if (match) {
        return robotCallback(msg);
      }
    }
  };
};

describe('Cowsay', function() {
  return describe('the matcher', function() {
    it('matches: the cow says, "hi"', function() {
      var chat, expect;
      chat = 'the cow says, "hi"';
      expect = Bubble + Cows["undefined"];
      console.log("\n" + expect);
      return assert.equal(expect, cowSay(robot(chat)));
    });
    it('matches: the confused cow says, "hi"', function() {
      var chat, expect;
      chat = 'the confused cow says, "hi"';
      expect = Bubble + Cows["confused"];
      console.log("\n" + expect);
      return assert.equal(expect, cowSay(robot(chat)));
    });
    it('matches: the surprised cow says, "hi"', function() {
      var chat, expect;
      chat = 'the surprised cow says, "hi"';
      expect = Bubble + Cows["surprised"];
      console.log("\n" + expect);
      return assert.equal(expect, cowSay(robot(chat)));
    });
    it('matches: the dizzy cow says, "hi"', function() {
      var chat, expect;
      chat = 'the dizzy cow says, "hi"';
      expect = Bubble + Cows["dizzy"];
      console.log("\n" + expect);
      return assert.equal(expect, cowSay(robot(chat)));
    });
    return it('matches: the raspberry cow says, "hi"', function() {
      var chat, expect;
      chat = 'the raspberry cow says, "hi"';
      expect = Bubble + Cows["raspberry"];
      console.log("\n" + expect);
      return assert.equal(expect, cowSay(robot(chat)));
    });
  });
});

Bubble = "<---->\n< hi >\n<---->\n";

Cows = {
  undefined: "\    \\   ^__^\n\     \\  (oo)\\_______\n\        (__)\\       )\\/\\\n\            ||----w |\n\            ||     ||",
  confused: "\    \\   ^__^\n\     \\  (Oo)\\_______\n\        (__)\\       )\\/\\\n\            ||----w |\n\            ||     ||",
  surprised: "\    \\   ^__^\n\     \\  (OO)\\_______\n\        (__)\\       )\\/\\\n\            ||----w |\n\            ||     ||",
  dizzy: "\    \\   ^__^\n\     \\  (@@)\\_______\n\        (__)\\       )\\/\\\n\            ||----w |\n\            ||     ||",
  raspberry: "\    \\   ^__^\n\     \\  (xx)\\_______\n\        (__)\\       )\\/\\\n\         U  ||----w |\n\            ||     ||"
};

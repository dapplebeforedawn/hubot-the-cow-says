assert = require("assert")
cowSay = require("../cowsay.js")

robot = (chat)->
  hear: (regex, robotCallback)->
    match = chat.match(regex)
    msg   =
      send:  (response)->
        return response
      match: match
      
    robotCallback(msg) if match

describe 'Cowsay', ->

  describe 'the matcher', ->
    it 'matches: the cow says, "hi"', ->
      chat = 'the cow says, "hi"'
      expect = Bubble+Cows["undefined"]
      console.log "\n" + expect
      assert.equal(expect, cowSay(robot chat))

    it 'matches: the confused cow says, "hi"', ->
      chat = 'the confused cow says, "hi"'
      expect = Bubble+Cows["confused"]
      console.log "\n" + expect
      assert.equal(expect, cowSay(robot chat))

    it 'matches: the surprised cow says, "hi"', ->
      chat = 'the surprised cow says, "hi"'
      expect = Bubble+Cows["surprised"]
      console.log "\n" + expect
      assert.equal(expect, cowSay(robot chat))

    it 'matches: the dizzy cow says, "hi"', ->
      chat = 'the dizzy cow says, "hi"'
      expect = Bubble+Cows["dizzy"]
      console.log "\n" + expect
      assert.equal(expect, cowSay(robot chat))

    it 'matches: the raspberry cow says, "hi"', ->
      chat = 'the raspberry cow says, "hi"'
      expect = Bubble+Cows["raspberry"]
      console.log "\n" + expect
      assert.equal(expect, cowSay(robot chat))

Bubble =
  """
  <---->
  < hi >
  <---->

  """

Cows =
  undefined:
   """
   \    \\   ^__^
   \     \\  (oo)\\_______
   \        (__)\\       )\\/\\
   \            ||----w |
   \            ||     ||
    """
  confused:
   """
   \    \\   ^__^
   \     \\  (Oo)\\_______
   \        (__)\\       )\\/\\
   \            ||----w |
   \            ||     ||
    """
  surprised:
   """
   \    \\   ^__^
   \     \\  (OO)\\_______
   \        (__)\\       )\\/\\
   \            ||----w |
   \            ||     ||
    """
  dizzy:
   """
   \    \\   ^__^
   \     \\  (@@)\\_______
   \        (__)\\       )\\/\\
   \            ||----w |
   \            ||     ||
    """
  raspberry:
   """
   \    \\   ^__^
   \     \\  (xx)\\_______
   \        (__)\\       )\\/\\
   \         U  ||----w |
   \            ||     ||
    """


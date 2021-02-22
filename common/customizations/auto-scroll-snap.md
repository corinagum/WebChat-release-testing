## Steps for auto scroll snap

- [Snap on activity plus 30 pixels](index.html?customization=auto-scroll-snap&mode=activity)
  - Click on the button twice to add 2 messages
  - Expect: it should stop after the second message after first line
- [Snap on page minus 30 pixels](index.html?customization=auto-scroll-snap&mode=page)
  - Click on the button until it reach top of the page
  - Expect: it should stop at one line before the page filled up

<button id="add-bot-message" type="button">Click here to add a message</button>

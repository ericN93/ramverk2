/**
 * To setup a websocket connection, and nothing more.
 */
(function () {
    "use strict";

    let websocket;
    let url         = 'ws://localhost:3000/'
    let userNick    = '';
    let connect     = document.getElementById("connect");
    let nickName    = document.getElementById("nickName")
    let sendMessage = document.getElementById("send_message");
    let message     = document.getElementById("message");
    let output      = document.getElementById("output");



    /**
     * Log output to web browser.
     *
     * @param  {string} message to output in the browser window.
     *
     * @return {void}
     */
    function outputLog(data) {
        let now = new Date();
      	let timestamp = now.toLocaleTimeString();

      	output.innerHTML += `${timestamp} ${data.nick}: ${data.message}<br>`;
      	output.scrollTop = output.scrollHeight;
    }




    /**
     * What to do when user clicks Connect
     */
    connect.addEventListener("click", function(/*event*/) {
        console.log("Connecting to: " + url);
        console.log("nickname: " + nickName.value);
        websocket = new WebSocket(url, 'json'), userNick = nickName.value;
        console.log("usernick: " + userNick);


        websocket.onopen = function() {
            let data = {nick: 'Server', message: 'The websocket is now open'}
  		    outputLog(data);
        };

        websocket.onmessage = function(event) {

            outputLog(JSON.parse(event.data));
        };

        websocket.onclose = function() {
            console.log("The websocket is now closed.");
            console.log(websocket);
            outputLog("Websocket is now closed.");
        };
    }, false);




    /**
     * What to do when user clicks to send a message.
     */
    sendMessage.addEventListener("click", function(/*event*/) {
        let messageText = message.value;

        if (!websocket || websocket.readyState === 3) {
            console.log('The websocket is not connected to a server.');
        } else {
            console.log('------')
            console.log(userNick)
            console.log(messageText)
            console.log('------')
            websocket.send(JSON.stringify({nick: userNick, message: messageText}));
            outputLog({nick: userNick, message: messageText});
        }
    });

})();

var messages = [],
  lastUserMessage = "", 
  botMessage = "",
  botName = "Chatbot",
  talking = true;

function chatbotResponse() {
  talking = true;
  botMessage = "Sorry, I cannot understand you. Kindly fillout this form to"; //eto yung pag di na niya gets yung tinatanong

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
    const hi = ['Hi! Ask something to get started', 'Hello! Ask something to get started']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === "when is the enrollment for second semester?") {
    botMessage = 'January 10, 2018 at UST Seminary Gym'
  }

  if (lastUserMessage === "hayaan mo sila") {
    botMessage = 'Sige sige, maglibang!!!!!!!'
  }
}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    
    messages.push("<b> You: </b>" + lastUserMessage);
    chatbotResponse();

    messages.push("<b>" + botName + ":</b> " + botMessage);
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var talk = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(talk);
  }
}

document.onkeypress = keyPress;

function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13) {
    newEntry();
  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}


/*readmore */

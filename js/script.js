var messages = [],
  lastUserMessage = "", 
  botMessage = "",
  botName = "Chatbot",
  talking = true;

function chatbotResponse() {
  talking = true;
  botMessage = "otoke"; //eto yung pag di na niya gets yung tinatanong

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
    const hi = ['hi','hallo','hello', 'hola']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === "ma'am kahoot") {
    botMessage = 'HINDE' //'My name is ' + botName;
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

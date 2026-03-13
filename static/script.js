function sendMessage(){

let input = document.getElementById("userInput").value;

fetch("/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message:input
})

})

.then(res => res.json())

.then(data => {

let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += "<p><b>You:</b> "+input+"</p>";

chatbox.innerHTML += "<p><b>Bot:</b> "+data.response+"</p>";

document.getElementById("userInput").value="";

});

}
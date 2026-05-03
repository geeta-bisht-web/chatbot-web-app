const form = document.getElementById("chatForm");
const input = document.getElementById("chatInput");
const chat = document.getElementById("chatStream");

const replies = [
  "That's a smart question!",
  "Interesting thought!",
  "I'm still learning...",
  "Try asking me something else!",
  "Let me think about that!"
];

function showMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = sender;

  const bubble = document.createElement("span");
  bubble.className = "bubble";
  bubble.textContent = text;

  msg.appendChild(bubble);
  chat.appendChild(msg);

  chat.scrollTop = chat.scrollHeight;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userText = input.value.trim();
  if (!userText) return;

  showMessage(userText, "you");
  input.value = "";

  setTimeout(() => {
    const reply = replies[Math.floor(Math.random() * replies.length)];
    showMessage(reply, "bot");
  }, 1000);
});

function clearChat() {
  chat.innerHTML = "";
}

function refreshChat() {
  location.reload();
}
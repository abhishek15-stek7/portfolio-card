document.getElementById('chatbot-button').addEventListener('click', () => {
  const win = document.getElementById('chatbot-window');
  win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
  win.style.flexDirection = 'column';
});

const chatbotInput = document.querySelector('#chatbot-input input');
const chatbotBtn = document.querySelector('#chatbot-input button');
const chatbotMessages = document.getElementById('chatbot-messages');

function chatbotReply(userMsg) {
  const lower = userMsg.toLowerCase();
  if (lower.includes("email")) return "His email is ambikabhi.14@gmail.com";
  if (lower.includes("phone") || lower.includes("number")) return "You can reach him at +91 7004292495.";
  if (lower.includes("location") || lower.includes("city")) return "He is from Patna, Bihar, India.";
  if (lower.includes("skills")) return "He is skilled in HTML, CSS, JS, Python, and AI development.";
  if (lower.includes("github")) return "His GitHub is: https://github.com/abhishek15-stek7";
  return "Sorry, I don't know that. Try asking about his skills, email, phone, or GitHub.";
}

function sendChat() {
  const msg = chatbotInput.value.trim();
  if (!msg) return;
  const userDiv = document.createElement("div");
  userDiv.className = "chat-msg user-msg";
  userDiv.textContent = msg;
  chatbotMessages.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.className = "chat-msg bot-msg";
  botDiv.textContent = chatbotReply(msg);
  chatbotMessages.appendChild(botDiv);

  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  chatbotInput.value = "";
}

chatbotBtn.addEventListener("click", sendChat);
chatbotInput.addEventListener("keydown", e => {
  if (e.key === "Enter") sendChat();
});

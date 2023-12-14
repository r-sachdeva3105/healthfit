document.addEventListener("DOMContentLoaded", function () {

    let chatLog = document.getElementById("chat-log");
    let userMessageInput = document.getElementById("user-message");
    let sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        let userMessage = userMessageInput.value;

        // Add the user's message to the chat log
        appendUserMessage(userMessage);

        // Simulate a response from the chatbot
        setTimeout(function () {
            let botResponse = getBotResponse(userMessage);
            appendBotMessage(botResponse);
        }, 500);

        // Clear the input field
        userMessageInput.value = "";
    });

    function appendUserMessage(message) {
        let userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("user-message");
        userMessageDiv.textContent = message;
        chatLog.appendChild(userMessageDiv);
    }

    function appendBotMessage(message) {
        let botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("bot-message");
        botMessageDiv.textContent = message;
        chatLog.appendChild(botMessageDiv);
    }

    function getBotResponse(userMessage) {
        // Replace this with your chatbot logic
        if (userMessage.toLowerCase().includes("hello")) {
            return "Hello! How can I assist you?";
        } else if (userMessage.toLowerCase().includes("bye")) {
            return "Goodbye! Have a great day.";
        } else if (userMessage.toLowerCase().includes("how are you")) {
            return "I'm good, thank you :) \n How about you?";
        } else if (userMessage.includes("Do you help me?")) {
            return "Yes! How may I help you?";
        }
        else {
            return "I'm sorry, I don't understand that.";
        }
    }
});

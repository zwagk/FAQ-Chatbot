document.addEventListener("DOMContentLoaded", function () {
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbot = document.getElementById("close-chatbot");
    const faqCategories = document.getElementById("faq-categories");
    const faqQuestions = document.getElementById("faq-questions");

    // Updated FAQ Data
    const faqData = {
        "category1": [
            { question: "Example question 1?", answer: "This is an example answer." },
            { question: "Example question 2?", answer: "This is an example answer." },
            { question: "Example question 3?", answer: "This is an example answer." }
        ],
        "category2": [
            { question: "Example question 1?", answer: "This is an example answer." },
            { question: "Example question 2?", answer: "This is an example answer." }
        ],
        "category3": [
            { question: "Example question 1?", answer: "This is an example answer." }
        ]
    };

    // Open chatbot
    chatbotButton.addEventListener("click", () => {
        chatbotContainer.classList.toggle("hidden");
    });

    // Close chatbot
    closeChatbot.addEventListener("click", () => {
        chatbotContainer.classList.add("hidden");
    });

    // Handle category click
    faqCategories.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const category = event.target.getAttribute("data-category");
            displayFAQs(category);
        }
    });

    // Display questions when a category is clicked
    function displayFAQs(category) {
        faqQuestions.innerHTML = "";
        faqQuestions.classList.remove("hidden");

        faqData[category].forEach(item => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("faq-item");
            questionDiv.textContent = item.question;

            const answerDiv = document.createElement("div");
            answerDiv.classList.add("faq-answer", "hidden");
            answerDiv.textContent = item.answer;

            questionDiv.addEventListener("click", () => {
                answerDiv.classList.toggle("hidden");
            });

            faqQuestions.appendChild(questionDiv);
            faqQuestions.appendChild(answerDiv);
        });
    }
});
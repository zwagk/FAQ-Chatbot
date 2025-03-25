# FAQ-Chatbot
A simple FAQ Chatbot system that allows users to click a button at the bottom right of the page to open a chatbot interface.

Users can select categories, such as "Category 1," "Category 2," and "Category 3" to view relevant FAQs.

# Features
📌 | Floating chatbot button at the bottom right of the page

📖 | Expandable FAQ categories (e.g., Category 1, Category 2, Category 3)

❓ | Dynamic FAQ questions that display answers when clicked

🎨 | Modern UI with smooth transitions

🛠️ | Easily customizable and extendable

# Installation

1️⃣ | Clone this repository:

git clone https://github.com/zwagk/FAQ-Chatbot.git

2️⃣ | Navigate to the project folder:

cd faq-chatbot

3️⃣ | Open index.html in your browser.

# Usage

1️⃣ | Click the 💬 Chatbot button at the bottom right to open the Chatbot window.

2️⃣ | Select a category (ex., "Category 1") to see related FAQ questions.

3️⃣ | Click a question to see the answer.

4️⃣ | Close the chatbot by clicking the ❌ button.

# Customisation

❗ | The FAQ categories used are placeholders (Category 1, Category 2, etc.).

❗ | Customise them yourself by modifying 'faqData' in 'chatbot.js' with your own questions and answers:
```
const faqData = {
    "category1": [
        { question: "Example question 1?", answer: "This is an example answer." },
        { question: "Example question 2?", answer: "This is an example answer." }
    ],
    "category2": [
        { question: "Example question 1?", answer: "This is an example answer." }
    ],
    "category3": [
        { question: "Example question 1?", answer: "This is an example answer." }
    ]
};
```

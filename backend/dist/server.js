"use strict";
// src/server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Example endpoint using ES6 arrow functions
app.post('/api/send-message', (req, res) => {
    const userMessage = req.body.message;
    // Replace this with your logic to process the message (e.g., call OpenAI API)
    const botResponse = `You said: "${userMessage}". Here's a response from the bot.`;
    res.json({ response: botResponse });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

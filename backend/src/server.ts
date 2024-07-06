import express, { Request, Response } from 'express';
import cors from 'cors';
import OpenAI from "openai";
const app = express();
const port = process.env.PORT || 5000;
const openai = new OpenAI();
// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());


// Example endpoint handling POST requests to '/api/send-message'
app.post('/api/13', async (req: Request, res: Response) => {
  const userMessage: string = req.body.message;
  
  // Replace this with your logic to process the message (e.g., call OpenAI API)
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: userMessage }],
    model: 'gpt-3.5-turbo',
  });

  const botResponse = completion.choices[0].message.content;
  // const botResponse = "hey i see you are checking ";

  // Send JSON response with bot's response
  res.json({ response: botResponse });
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

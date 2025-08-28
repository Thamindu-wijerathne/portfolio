// src/lib/gemini.ts
import { GoogleGenAI } from "@google/genai";

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenAI({
  apiKey: apiKey,
});

export type Message = {
  from: "user" | "bot";
  text: string;
};

export async function askGemini(prompt: string): Promise<Message> {
  const result = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
      You are chatting with an AI assistant that knows about the portfolio owner:
      Name: Thamindu Wijerathne
      Skills: Machine Learning, React, Spring Boot, PostgreSQL, React Native, SQL, MERN, Kotlin and flutter little, R, octav
      Projects: AI image generation(python, cvzone), Inventory Management System(react, springboot, postgresql), Movie App(reactnative, appwrite), resturant(mern stack), Student project managment sytem(html, php, sql)
      Education: Completed Machine Learning Specialization (Coursera), aws 101, kcloud beginner docker
      University : university of colombo school of computing computer science degree
      school : kingswood college kandy
      passions : ML and AI
      linkdin : https://www.linkedin.com/in/thamindu-wijerathne-a2a6a12a9
      github : https://github.com/Thamindu-wijerathne
      You should answer all questions based on this information. if user ask some link send that link with following 'openlink '.
      don't show link unless he specifyly ask about profile to show

      User question: ${prompt}`.trim(),
  });

  // first get response same as your original code
  const response = (await result.text) || "Sorry, I could not generate a response.";
  console.log(response)
  // then wrap it in Message type
  return {
    from: "bot",
    text: response,
  };
}

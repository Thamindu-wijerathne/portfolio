// src/lib/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBDK53GYS8kdoyZWtnMkzYiKCVEKIYEQr4"); // Replace with your key

export async function askGemini(prompt: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
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
          },
        ],
      },
    ],
  });

  const response = await result.response;
  return response.text();
}

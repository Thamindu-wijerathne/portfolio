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
              Full Name: Adikari Mudiyanselage Nipun Dilshan Wijesingh
              Location: Monaragala, Sri Lanka
              Role: IT Technician and Tech Entrepreneur
              Education: Completed A/Ls in Business, Accounting, and ICT; Certified in Computer Hardware and Networking from VTC
              Brand: KAMA IT Solutions
              Brand Services: Computer hardware repair, networking, software installations, and IT consulting
              Skills: PC repair, hardware assembly, troubleshooting, software setup, basic networking, website setup
              Projects: Custom PC builds, system troubleshooting, IT support projects
              Dream: To grow KAMA IT Solutions into a leading personal tech support brand
              School: Wellassa Central College
              GitHub: https://github.com/KAMA1007
              LinkedIn: https://www.linkedin.com/in/nipun-dilshan-02360436b
              You should answer all questions based on this information. If the user asks for a link, send that link prefixed with 'openlink '.
              Don't show links unless the user specifically asks about the profile.

              User question: ${prompt}`.trim(),
          },
        ],
      },
    ],
  });

  const response = await result.response;
  return response.text();
}

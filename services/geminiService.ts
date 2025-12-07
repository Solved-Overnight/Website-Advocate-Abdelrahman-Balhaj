import { GoogleGenAI } from "@google/genai";
import { GenerateType } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize the client strictly according to the new SDK guidelines
const ai = new GoogleGenAI({ apiKey });

export const generateAboutContent = async (currentText: string, type: GenerateType): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key not found. Returning mock response for demo purposes.");
    return "API Key missing. Please provide a valid API Key to use the AI enhancement features.";
  }

  let prompt = "";
  
  switch (type) {
    case GenerateType.EXPAND:
      prompt = `Act as a senior legal copywriter for a high-end law firm in Abu Dhabi called 'Abdelrahman Balhaj Advocates & Legal Consultants Dr'. 
      Rewrite and expand the following text to be more authoritative, luxurious, and professional. 
      Focus on expertise, trust, and UAE legal excellence. Keep it under 200 words.
      
      Current text: "${currentText}"`;
      break;
    case GenerateType.ARABIC:
      prompt = `Translate the following text into formal, professional Arabic suitable for a high-end legal consultancy in the UAE.
      
      Text: "${currentText}"`;
      break;
    default:
      prompt = `Refine the following text to be more concise and punchy for a luxury brand.
      
      Text: "${currentText}"`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Unable to generate content at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI systems are currently busy. Please try again later.";
  }
};
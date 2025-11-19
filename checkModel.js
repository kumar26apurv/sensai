import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAhBYKANyJ_ZACnPbhdGxKsKfBdEiSvrTQ"; // do NOT share here

const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models",
      {
        headers: {
          "x-goog-api-key": API_KEY,
        },
      }
    );

    const data = await response.json();

    console.log("Available models:\n");
    data.models.forEach((m) => console.log(m.name));
  } catch (err) {
    console.error("ERROR:", err);
  }
}

listModels();

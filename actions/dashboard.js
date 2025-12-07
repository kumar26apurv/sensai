"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Groq from "groq-sdk";

// Initialize Groq Client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateAIInsights = async (industry) => {
  const prompt = `
    Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format (no notes, no markdown):

    {
      "salaryRanges": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "High" | "Medium" | "Low",
      "topSkills": ["skill1", "skill2"],
      "marketOutlook": "Positive" | "Neutral" | "Negative",
      "keyTrends": ["trend1", "trend2"],
      "recommendedSkills": ["skill1", "skill2"]
    }

    REQUIREMENTS:
    - Return ONLY the JSON.
    - Include at least 5 roles in salaryRanges.
    - Growth rate must be a percentage number.
    - Include at least 5 skills & 5 trends.
    - No markdown, no explanation, no extra text.
  `;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Very strong for structured outputs
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500,
      temperature: 0.2,
    });

    let text = completion.choices[0].message.content.trim();

    // Remove any accidental markdown fences
    text = text.replace(/```json|```/g, "").trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating industry insights:", error);
    throw new Error("Failed to generate insights");
  }
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      industryInsight: true,
    },
  });

  if (!user) throw new Error("User not found");

  // Generate insights if none exists
  if (!user.industryInsight) {
    const insights = await generateAIInsights(user.industry);

    const industryInsight = await db.industryInsight.create({
      data: {
        industry: user.industry,
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days later
      },
    });

    return industryInsight;
  }

  return user.industryInsight;
}

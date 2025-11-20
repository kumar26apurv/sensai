🤖 AI Career Coach – Full Stack Career Guidance Platform
A modern AI-powered Career Coaching Web Application built using React 19 + Next.js 15 and powered by Gemini AI. This platform helps users improve their career prospects with AI-driven insights, mock interviews, resume building, and performance tracking — making it a standout project for your portfolio and resume.

🚀 Project Overview
The AI Career Coach is designed to guide users through every stage of their career journey with intelligent automation and analytics.
Key Capabilities
AI-generated Industry Insights
Mock Interview Preparation with Gemini AI
Resume Builder (Markdown + PDF)
Cover Letter Generator
Interview Performance Analytics
Career Onboarding Flow
Weekly AI Insights via Cron Jobs
This project demonstrates real-world integration of AI, authentication, database design, and event-driven background jobs.

🧑‍💻 Tech Stack

Frontend
React 19 || Next.js 15 (App Router) || Tailwind CSS || Shadcn UI || React Hook Form + Zod

Backend & Services
NeonDB (PostgreSQL) || Prisma ORM || Clerk Authentication || Inngest (Background Jobs + Cron) || Gemini AI API

🌐 Live Preview
🔗 Live App: https://sensai-snowy-nu.vercel.app/

✨ Features
🔐 Clerk Authentication (Custom Sign In / Sign Up)
🧠 AI Industry Insights Generator
🎯 Mock Interviews & Quiz System
📊 Performance Tracking Dashboard
📝 AI Resume Builder (Markdown + PDF Export)
✉️ AI Cover Letter Generator
⏰ Weekly Career Insights via Inngest Cron
📈 Real-time Career Progress Analytics

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone <repo-url>
cd ai-career-coach
2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev

🔐 Environment Variables
Create a .env file in root and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGNIN_URL=
NEXT_PUBLIC_CLERK_SIGNUP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGNIN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGNUP_URL=
DATABASE_URL=
GEMINI_API_KEY=

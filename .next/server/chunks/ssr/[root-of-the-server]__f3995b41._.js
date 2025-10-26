module.exports = [
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/actions/dashboard.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00fd9a76538e46ac505176edc3af2d903147fc5155":"getIndustryInsights","7fc8da251ab711352b964e6b75fa839b8b17bd9ddd":"generateAIInsights"},"",""] */ __turbopack_context__.s([
    "generateAIInsights",
    ()=>generateAIInsights,
    "getIndustryInsights",
    ()=>getIndustryInsights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-rsc] (ecmascript)"); // ✅ latest SDK
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
// Initialize Gemini
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
    apiKey: process.env.GEMINI_API_KEY
});
const generateAIInsights = async (industry)=>{
    const prompt = `
    Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format:
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
    IMPORTANT: Return ONLY the JSON. Include at least 5 roles and 5 skills/trends. No notes or markdown.
  `;
    try {
        const result = await genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt
        });
        const text = result.text || "";
        if (!text) return getDefaultInsights();
        const cleanText = text.replace(/```(?:json)?\n?/g, "").trim();
        try {
            return JSON.parse(cleanText);
        } catch  {
            return getDefaultInsights();
        }
    } catch  {
        return getDefaultInsights();
    }
};
// Default fallback if Gemini fails
const getDefaultInsights = ()=>({
        salaryRanges: [
            {
                role: "Example Role",
                min: 0,
                max: 0,
                median: 0,
                location: "Unknown"
            }
        ],
        growthRate: 0,
        demandLevel: "Medium",
        topSkills: [],
        marketOutlook: "Neutral",
        keyTrends: [],
        recommendedSkills: []
    });
async function getIndustryInsights() {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) throw new Error("Unauthorized");
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId: userId
        },
        include: {
            industryInsight: true
        }
    });
    if (!user) throw new Error("User not found");
    let industryInsight = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].industryInsight.findUnique({
        where: {
            industry: user.industry
        }
    });
    if (!industryInsight || new Date() >= new Date(industryInsight.nextUpdate)) {
        const insights = await generateAIInsights(user.industry);
        if (!industryInsight) {
            industryInsight = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].industryInsight.create({
                data: {
                    industry: user.industry,
                    ...insights,
                    nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }
            });
        } else {
            industryInsight = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].industryInsight.update({
                where: {
                    industry: user.industry
                },
                data: {
                    ...insights,
                    nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }
            });
        }
    }
    return industryInsight;
} // "use server";
 // import { db } from "@/lib/prisma";
 // import { auth } from "@clerk/nextjs/server";
 // import { GoogleGenAI } from "@google/genai"; // ✅ latest SDK
 // // Initialize Gemini
 // const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
 // // --- Safe Gemini insights generation ---
 // export const generateAIInsights = async (industry) => {
 //   const prompt = `
 //     Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format:
 //     {
 //       "salaryRanges": [
 //         { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
 //       ],
 //       "growthRate": number,
 //       "demandLevel": "High" | "Medium" | "Low",
 //       "topSkills": ["skill1", "skill2"],
 //       "marketOutlook": "Positive" | "Neutral" | "Negative",
 //       "keyTrends": ["trend1", "trend2"],
 //       "recommendedSkills": ["skill1", "skill2"]
 //     }
 //     IMPORTANT: Return ONLY the JSON. Include at least 5 roles and 5 skills/trends. No notes or markdown.
 //   `;
 //   try {
 //     const result = await genAI.generate({
 //       model: "gemini-2.0-flash",
 //       input: prompt,
 //     });
 //     const text = result.outputText || "";
 //     if (!text) return getDefaultInsights();
 //     const cleanText = text.replace(/```(?:json)?\n?/g, "").trim();
 //     try {
 //       return JSON.parse(cleanText);
 //     } catch (err) {
 //       console.warn("Failed to parse Gemini JSON:", err.message);
 //       return getDefaultInsights();
 //     }
 //   } catch (err) {
 //     console.error("Gemini API error:", err.message);
 //     return getDefaultInsights();
 //   }
 // };
 // // Default fallback if Gemini fails
 // const getDefaultInsights = () => ({
 //   salaryRanges: [{ role: "Example Role", min: 0, max: 0, median: 0, location: "Unknown" }],
 //   growthRate: 0,
 //   demandLevel: "Medium",
 //   topSkills: [],
 //   marketOutlook: "Neutral",
 //   keyTrends: [],
 //   recommendedSkills: [],
 // });
 // export async function getIndustryInsights() {
 //   const { userId } = await auth();
 //   if (!userId) throw new Error("Unauthorized");
 //   const user = await db.user.findUnique({
 //     where: { clerkUserId: userId },
 //     include: { industryInsight: true },
 //   });
 //   if (!user) throw new Error("User not found");
 //   if (!user.industryInsight) {
 //     // ✅ Generate BEFORE DB call (no Prisma transaction timeout risk)
 //     const insights = await generateAIInsights(user.industry);
 //     const industryInsight = await db.industryInsight.create({
 //       data: {
 //         industry: user.industry,
 //         ...insights,
 //         nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
 //       },
 //     });
 //     return industryInsight;
 //   }
 //   return user.industryInsight;
 // }
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateAIInsights,
    getIndustryInsights
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateAIInsights, "7fc8da251ab711352b964e6b75fa839b8b17bd9ddd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getIndustryInsights, "00fd9a76538e46ac505176edc3af2d903147fc5155", null);
}),
"[project]/actions/user.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00570153b607cd55ffce061a4c828156986064cca3":"getUserOnboardingStatus","402eaa9fcf95938e36ed1a74dee53d5f9cc7ac199d":"updateUser"},"",""] */ __turbopack_context__.s([
    "getUserOnboardingStatus",
    ()=>getUserOnboardingStatus,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dashboard.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function updateUser(data) {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) throw new Error("Unauthorized");
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId: userId
        }
    });
    if (!user) throw new Error("User not found");
    try {
        // Generate AI insights BEFORE transaction
        let insights = null;
        let industryInsight = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].industryInsight.findUnique({
            where: {
                industry: data.industry
            }
        });
        if (!industryInsight) {
            insights = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateAIInsights"])(data.industry);
        }
        // Only DB operations inside transaction
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
            if (!industryInsight) {
                industryInsight = await tx.industryInsight.create({
                    data: {
                        industry: data.industry,
                        ...insights,
                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    }
                });
            }
            const updatedUser = await tx.user.update({
                where: {
                    id: user.id
                },
                data: {
                    industry: data.industry,
                    experience: data.experience,
                    bio: data.bio,
                    skills: data.skills
                }
            });
            return {
                updatedUser,
                industryInsight
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return result.updatedUser;
    } catch (error) {
        console.error("Error updating user and industry:", error);
        throw new Error("Failed to update profile");
    }
}
async function getUserOnboardingStatus() {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) throw new Error("Unauthorized");
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            },
            select: {
                industry: true
            }
        });
        return {
            isOnboarded: !!user?.industry
        };
    } catch (error) {
        console.error("Error checking onboarding status:", error);
        throw new Error("Failed to check onboarding status");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateUser,
    getUserOnboardingStatus
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUser, "402eaa9fcf95938e36ed1a74dee53d5f9cc7ac199d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserOnboardingStatus, "00570153b607cd55ffce061a4c828156986064cca3", null);
}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/dashboard/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/dashboard/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/dashboard/_components/DashboardView.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/dashboard/_components/DashboardView.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/dashboard/_components/DashboardView.jsx <module evaluation>", "default");
}),
"[project]/app/(main)/dashboard/_components/DashboardView.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/dashboard/_components/DashboardView.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/dashboard/_components/DashboardView.jsx", "default");
}),
"[project]/app/(main)/dashboard/_components/DashboardView.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$dashboard$2f$_components$2f$DashboardView$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(main)/dashboard/_components/DashboardView.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$dashboard$2f$_components$2f$DashboardView$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/(main)/dashboard/_components/DashboardView.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$dashboard$2f$_components$2f$DashboardView$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/(main)/dashboard/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dashboard.js [app-rsc] (ecmascript)"); // must exist in dashboard.js
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$dashboard$2f$_components$2f$DashboardView$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/dashboard/_components/DashboardView.jsx [app-rsc] (ecmascript)"); // check exact folder & filename
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/user.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function DashboardPage() {
    const onboarded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserOnboardingStatus"])();
    if (!onboarded.isOnboarded) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/onboarding");
    const insights = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIndustryInsights"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$dashboard$2f$_components$2f$DashboardView$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        insights: insights
    }, void 0, false, {
        fileName: "[project]/app/(main)/dashboard/page.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
} /**const faqsData = [
    // Year-wise data with a `year` property
    {
      year: "First Year",
      question:
        "Which programming language should I focus on first? C++ or Python?",
      answer:
        "Focus on the language that helps you learn programming fundamentals quickly. C++ is great for understanding memory and performance, Python is easier for problem-solving and AI/ML.",
    },
    {
      year: "First Year",
      question:
        "How important are math subjects like Discrete Math, Linear Algebra?",
      answer:
        "Math is crucial, especially for algorithms, AI/ML, and graphics. Discrete Math helps in understanding logic and computation; Linear Algebra is essential for AI/ML.",
    },
    {
      year: "First Year",
      question: "Should I start learning coding outside college?",
      answer:
        "Yes. Practice coding on platforms like LeetCode, Codeforces, HackerRank to build strong problem-solving skills.",
    },
    {
      year: "First Year",
      question:
        "How do I manage time between college labs and learning coding?",
      answer:
        "Allocate short daily sessions for coding and practice during weekends. Prioritize understanding concepts over just completing assignments.",
    },
    {
      year: "First Year",
      question: "Which online platforms are good for coding practice?",
      answer:
        "LeetCode, Codeforces, HackerRank, GeeksforGeeks, and CodeChef are excellent for practicing algorithms and DSA.",
    },
    {
      year: "First Year",
      question: "How do I start learning Competitive Programming?",
      answer:
        "Start with easy problems on Codeforces, CodeChef, or HackerRank. Learn basic loops, arrays, strings, and sorting algorithms first.",
    },
    {
      year: "First Year",
      question: "Which programming language is best for CP?",
      answer:
        "C++ is preferred for speed, STL, and better control of memory. Python can be used for easier syntax but may be slower in contests.",
    },
    {
      year: "First Year",
      question: "How much time should I dedicate to CP daily?",
      answer:
        "Even 30–60 minutes daily is effective if consistent. Gradually increase difficulty over time.",
    },
    {
      year: "First Year",
      question: "What are the must-learn data structures for CP?",
      answer:
        "Arrays, Strings, HashMaps, Stacks, Queues, Heaps, Trees, Graphs, and basic DP (Dynamic Programming).",
    },
    {
      year: "First Year",
      question: "Do I need math for CP?",
      answer:
        "Yes. Number theory, combinatorics, probability basics, and modular arithmetic are commonly used.",
    },

    {
      year: "Second Year",
      question:
        "Should I learn Web Development, App Development, or Data Science?",
      answer:
        "Choose based on your interest: Web/App for product building, Data Science for analytics/AI. All are growing fields, but each needs different skills.",
    },
    {
      year: "Second Year",
      question: "What projects should I do for my portfolio?",
      answer:
        "Start small projects like websites, apps, or AI models. Showcase completed projects on GitHub to impress recruiters.",
    },
    {
      year: "Second Year",
      question: "How to start competitive programming or DSA seriously?",
      answer:
        "Learn basic algorithms and data structures, solve problems daily on coding platforms, participate in contests to improve speed and logic.",
    },
    {
      year: "Second Year",
      question: "Do internships matter now or can I focus on learning?",
      answer:
        "Early internships are optional but help in experience. Focus on learning fundamentals first; internships become more important in 3rd year.",
    },
    {
      year: "Second Year",
      question:
        "Which electives to choose for AI, ML, Cybersecurity, or Cloud?",
      answer:
        "Choose electives aligned with your career interest. AI/ML needs probability/statistics, Cybersecurity needs networking/security fundamentals.",
    },

    {
      year: "Third Year",
      question: "How to prepare for internships in top tech companies?",
      answer:
        "Strengthen DSA, build projects, contribute to open source, and prepare for behavioral interviews. Start applying early.",
    },
    {
      year: "Third Year",
      question: "Which programming language/technology should I master?",
      answer:
        "Depends on your interest: Python for AI/ML, JavaScript/TypeScript for Web Dev, C++/Java for system-level or competitive programming.",
    },
    {
      year: "Third Year",
      question: "Should I focus on DSA or practical projects?",
      answer:
        "Balance both. DSA is key for interviews; projects demonstrate practical skills and initiative.",
    },
    {
      year: "Third Year",
      question:
        "Is research important or should I just focus on industry skills?",
      answer:
        "Research is optional unless you plan for higher studies or AI roles. Industry skills are more important for software development jobs.",
    },
    {
      year: "Third Year",
      question: "How do I prepare my GitHub and resume professionally?",
      answer:
        "Upload clean, well-documented projects on GitHub. Resume should highlight skills, projects, internships, and achievements concisely.",
    },
    {
      year: "Third Year",
      question:
        "Should I start learning advanced topics like ML, Blockchain, Cloud?",
      answer:
        "Yes, if interested. Start with small projects or courses to get hands-on experience; don’t overwhelm yourself.",
    },
    {
      year: "Third Year",
      question: "How to improve my CP rating quickly?",
      answer:
        "Solve problems consistently, participate in contests, analyze editorials, and learn from mistakes.",
    },
    {
      year: "Third Year",
      question: "How to balance CP practice with projects and DSA?",
      answer:
        "Set dedicated time blocks: 1–2 hours of CP, DSA for interviews, projects for portfolio. Consistency beats cramming.",
    },
    {
      year: "Third Year",
      question: "Should I focus on CP if I want a job in AI/ML?",
      answer:
        "CP improves problem-solving skills but for AI/ML also focus on Python, NumPy, Pandas, ML algorithms, and projects.",
    },
    {
      year: "Third Year",
      question: "Which platforms are best for CP?",
      answer:
        "Codeforces, AtCoder, CodeChef, LeetCode, HackerRank, and TopCoder.",
    },

    {
      year: "Fourth Year",
      question: "How to prepare for placements efficiently?",
      answer:
        "Focus on DSA, system design, and mock interviews. Revise past projects and practice behavioral questions.",
    },
    {
      year: "Fourth Year",
      question: "Should I go for higher studies (MTech/MS) or job?",
      answer:
        "Depends on your long-term goal. Job if you want industry experience, MS/MTech if you want research or specialized roles.",
    },
    {
      year: "Fourth Year",
      question:
        "How to choose between core CS roles, Web/AI/ML, or product-based roles?",
      answer:
        "Align choice with your interest, skills, and career goals. Try internships to understand the work before final decisions.",
    },
    {
      year: "Fourth Year",
      question: "What are the important interview skills to focus on?",
      answer:
        "DSA, system design, problem-solving, coding efficiency, and behavioral skills.",
    },
    {
      year: "Fourth Year",
      question:
        "How to do a final year project that is impressive but feasible?",
      answer:
        "Pick a topic you’re passionate about, use existing libraries/tools, keep scope realistic, and document everything properly.",
    },

    {
      year: "General",
      question: "C++ vs Python vs Java for DSA & interviews — which to choose?",
      answer:
        "C++ for performance & competitive programming, Python for AI/ML, Java for readability & large-scale projects. Choose based on interest & job role.",
    },
    {
      year: "General",
      question:
        "Web Development vs AI/ML vs App Development — which is best for career?",
      answer:
        "All are good. Web/App for product roles, AI/ML for analytics/intelligence, pick based on your interest & strength in math/logic.",
    },
    {
      year: "General",
      question:
        "Do I need to be an expert in all CS subjects or focus on specialization?",
      answer:
        "Focus on fundamentals, DSA, and your chosen specialization. Depth is better than shallow knowledge everywhere.",
    },
    {
      year: "General",
      question:
        "How to balance coding practice, projects, and learning new tech?",
      answer:
        "Time-block your week: daily coding, weekly projects, and monthly new tech exploration. Consistency is key.",
    },
    {
      year: "General",
      question:
        "Should I focus on competitive programming or real-world projects?",
      answer:
        "Both matter. CP strengthens problem-solving; projects show practical skills. Balance based on career goals.",
    },
    {
      year: "General",
      question: "How to choose electives wisely for career goals?",
      answer:
        "Pick electives that strengthen your desired skill set or domain knowledge relevant to jobs or higher studies.",
    },
    {
      year: "General",
      question: "Is it too late to switch fields in final year?",
      answer:
        "Not too late. Focused learning and small projects can help you switch to Web, AI/ML, or other domains if needed.",
    },
  ];
 */ 
}),
"[project]/app/(main)/dashboard/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/dashboard/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3995b41._.js.map
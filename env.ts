import { config } from "dotenv";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { z } from "zod";

// En desarrollo utilizamos .env.local.
// Si no existe, dotenv simplemente no carga nada y
// Next.js seguirá utilizando sus propias variables.
const envLocalPath = resolve(process.cwd(), ".env.local");

if (existsSync(envLocalPath)) {
    config({
        path: envLocalPath,
    });
}

const envSchema = z.object({
    AUTH_GOOGLE_ID: z.string().min(1),

    AUTH_GOOGLE_SECRET: z.string().min(1),

    DATABASE_URL: z.url(),
});

export const env = envSchema.parse(process.env);
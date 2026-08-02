// import "dotenv/config";
import { defineConfig } from 'drizzle-kit';
import type { Config } from "drizzle-kit";

// export default defineConfig({
//     schema: "./db/schema/*.ts",
//     out: "./db/migrations",
//     dialect: "postgresql",
//     dbCredentials: {
//         url: process.env.DATABASE_URL!,
//     },
// });

export default {
    schema: "./db/schema/*.ts",
    out: "./db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
} satisfies Config;
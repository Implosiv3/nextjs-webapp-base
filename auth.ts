import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { findUserByEmail } from "@/repositories/users";
import { syncUser } from "@/services/users";
import { env } from "@/env";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: env.AUTH_GOOGLE_ID,
            clientSecret: env.AUTH_GOOGLE_SECRET,
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user?.email && user.name) {
                const dbUser = await syncUser({
                    email: user.email,
                    displayName: user.name,
                    imageUrl: user.image,
                });

                token.userId = dbUser.id;
            }

            if (!token.userId && token.email) {
                const dbUser = await findUserByEmail(token.email);

                if (dbUser) {
                    token.userId = dbUser.id;
                }
            }

            return token;
        },

        async session({ session, token }) {
            if (session.user && token.userId) {
                session.user.id = token.userId;
            }

            return session;
        },
    },
});
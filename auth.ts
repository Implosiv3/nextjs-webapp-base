import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { findUserByEmail } from "@/repositories/users";
import { syncUser } from "@/services/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user?.email && user.name) {
                const dbUser = await syncUser({
                    email: user.email,
                    name: user.name,
                    image: user.image,
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
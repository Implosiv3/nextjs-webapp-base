import { eq } from "drizzle-orm";

import { db } from "@/db";
import { NewUser, User, users } from "@/db/schema/users";

export async function findUserByEmail(
    email: string,
): Promise<User | null> {
    const result = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

    return result[0] ?? null;
}

export async function createUser(
    user: NewUser,
): Promise<User> {
    const result = await db
        .insert(users)
        .values(user)
        .returning();

    return result[0];
}
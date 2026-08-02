import { User } from "@/db/schema/users";

import {
    createUser,
    findUserByEmail,
} from "@/repositories/users";

export interface SyncUserInput {
    email: string;
    displayName: string;
    imageUrl?: string | null;
}

export async function syncUser(
    user: SyncUserInput,
): Promise<User> {
    const existingUser = await findUserByEmail(user.email);

    if (existingUser) {
        return existingUser;
    }

    return createUser({
        email: user.email,
        displayName: user.displayName,
        imageUrl: user.imageUrl ?? null,
    });
}
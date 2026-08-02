import { User } from "@/db/schema/users";

import {
    createUser,
    findUserByEmail,
    updateUser,
} from "@/repositories/users";

export async function syncUser(user: {
    email: string;
    name: string;
    image?: string | null;
}): Promise<User> {
    const existingUser = await findUserByEmail(user.email);

    if (!existingUser) {
        return createUser({
            email: user.email,
            name: user.name,
            imageUrl: user.image ?? null,
        });
    }

    const imageUrl = user.image ?? null;

    if (
        existingUser.name === user.name &&
        existingUser.imageUrl === imageUrl
    ) {
        return existingUser;
    }

    return updateUser(existingUser.id, {
        name: user.name,
        imageUrl,
    });
}
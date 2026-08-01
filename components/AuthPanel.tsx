import { auth } from "@/auth";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default async function AuthPanel() {
    const session = await auth();

    if (!session?.user) {
        return <LoginButton />;
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
            }}
        >
            <p>
                <strong>Nombre:</strong> {session.user.name}
            </p>

            <p>
                <strong>Email:</strong> {session.user.email}
            </p>

            <LogoutButton />
        </div>
    );
}
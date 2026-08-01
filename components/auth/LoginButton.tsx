"use client";

import "./LoginButton.module.scss"
import { signIn } from "next-auth/react";

export default function LoginButton() {
    return (
        <button
            onClick={() => signIn("google")}
            style={{
                padding: "12px 20px",
                fontSize: "16px",
                cursor: "pointer",
            }}
        >
            Iniciar sesión con Google
        </button>
    );
}
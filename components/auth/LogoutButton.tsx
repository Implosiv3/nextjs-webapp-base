"use client";

import "./LogoutButton.module.scss"
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut()}
            style={{
                padding: "12px 20px",
                fontSize: "16px",
                cursor: "pointer",
            }}
        >
            Cerrar sesión
        </button>
    );
}
"use client";

import { signIn } from "next-auth/react";

import styles from "./LoginButton.module.scss";

export default function LoginButton() {
    return (
        <button
            type="button"
            className={styles.button}
            onClick={() => signIn("google")}
        >
            Continue with Google
        </button>
    );
}
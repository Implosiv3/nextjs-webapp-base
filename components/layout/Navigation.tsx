"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navigation.module.scss";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav
            className={styles.navigation}
            aria-label="Main navigation"
        >
            <Link
                href="/"
                className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
            >
                Home
            </Link>

            <Link
                href="/about"
                className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}
            >
                About
            </Link>
        </nav>
    );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import styles from "./Navigation.module.scss";


export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav
            className={styles.navigation}
            aria-label="Main navigation"
        >
            <Link
                href={ROUTES.HOME}
                className={`${styles.link} ${pathname === ROUTES.HOME ? styles.active : ""}`}
            >
                Home
            </Link>

            <Link
                href={ROUTES.ABOUT}
                className={`${styles.link} ${pathname === ROUTES.ABOUT ? styles.active : ""}`}
            >
                About
            </Link>
        </nav>
    );
}
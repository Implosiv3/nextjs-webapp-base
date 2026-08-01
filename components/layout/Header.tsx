import AuthPanel from "@/components/auth/AuthPanel";

import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                Next.js WebApp Base
            </div>

            <AuthPanel />
        </header>
    );
}
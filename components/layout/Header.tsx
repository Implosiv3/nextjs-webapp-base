import AuthPanel from "@/components/auth/AuthPanel";

import Navigation from "./Navigation";
import PageContainer from "./PageContainer";

import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <PageContainer>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Next.js WebApp Base
                    </div>

                    <Navigation />

                    <AuthPanel />
                </div>
            </PageContainer>
        </header>
    );
}
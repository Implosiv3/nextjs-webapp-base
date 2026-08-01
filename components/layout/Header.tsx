import Link from "next/link";
import { auth } from "@/auth";
import { ROUTES } from "@/lib/routes";
import AuthPanel from "@/components/auth/AuthPanel";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import styles from "./Header.module.scss";


export default async function Header() {
    const session = await auth();

    return (
        <header className={styles.header}>
            <PageContainer>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Next.js WebApp Base
                    </div>

                    <Navigation />

                    {session?.user ? (
                        <AuthPanel />
                    ) : (
                        <Link
                            href={ROUTES.LOGIN}
                            className={styles.loginLink}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </PageContainer>
        </header>
    );
}
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import LoginButton from "@/components/auth/LoginButton";
import PageContainer from "@/components/layout/PageContainer";
import { ROUTES } from "@/lib/routes";

import styles from "./page.module.scss";

export default async function LoginPage() {
    const session = await auth();

    if (session) {
        redirect(ROUTES.DASHBOARD);
    }

    return (
        <PageContainer>
            <main className={styles.page}>
                <section className={styles.card}>
                    <h1 className={styles.title}>
                        Welcome
                    </h1>

                    <p className={styles.description}>
                        Sign in to continue to the application.
                    </p>

                    <LoginButton />
                </section>
            </main>
        </PageContainer>
    );
}
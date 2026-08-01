import PageContainer from "@/components/layout/PageContainer";

import styles from "./page.module.scss";

export default function Dashboard() {
    return (
        <PageContainer>
            <main>
                <h1 className={styles.title}>Dashboard</h1>

                <p>
                    This is the first private page of the application.
                </p>
            </main>
        </PageContainer>
    );
}
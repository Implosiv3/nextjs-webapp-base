import PageContainer from "@/components/layout/PageContainer";

import styles from "./page.module.scss";

export default function About() {
    return (
        <PageContainer>
            <main>
                <h1 className={styles.title}>About</h1>

                <p>
                    This is the first secondary page of the application.
                </p>
            </main>
        </PageContainer>
    );
}
import AuthPanel from "@/components/AuthPanel";

export default function Home() {
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                flexDirection: "column",
                gap: "24px",
            }}
        >
            <h1>Next.js WebApp Base</h1>

            <AuthPanel />
        </main>
    );
}
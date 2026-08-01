import type { ReactNode } from "react";

import { redirect } from "next/navigation";

import { auth } from "@/auth";

interface PrivateLayoutProps {
    children: ReactNode;
}

export default async function PrivateLayout({
    children,
}: Readonly<PrivateLayoutProps>) {
    const session = await auth();

    if (!session) {
        redirect("/api/auth/signin");
    }

    return <>{children}</>;
}
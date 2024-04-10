"use client"

import { Navbar } from "@nextui-org/react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="bg-[#242424]">
            {children}
        </section>
    );
}

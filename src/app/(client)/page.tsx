"use client"
import { ROUTES } from "@/core/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.HOME)
  })
  return (
    <>
      <main className={inter.className}>

      </main>
    </>
  );
}

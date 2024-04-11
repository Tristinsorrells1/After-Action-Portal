"use client";

import { Inter } from "next/font/google";
import "./globals.scss";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    console.log(1)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        const uid = user.uid;
        // If not on dashboard, redirect to dashboard
        if (router.pathname !== "/dashboard") {
          router.push("/dashboard");
        }
      } else {
        // User is signed out
        // Redirect to login page
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

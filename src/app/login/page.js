"use client";

import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const login = async (e) => {
    signInWithEmailAndPassword(auth, "tristin@ascentitech.com", "Password");
  };
  return (
    <main>
      <h2 onClick={login}>Login</h2>
    </main>
  );
}

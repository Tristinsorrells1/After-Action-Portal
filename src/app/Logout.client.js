"use client";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function LogoutButton() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <span className="navbar-text" onClick={logout}>
      Logout
    </span>
  );
}

export default LogoutButton;

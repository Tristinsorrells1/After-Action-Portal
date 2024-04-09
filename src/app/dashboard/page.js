import React from "react";
import Dashboard from "../../components/dashboard";
import styles from "./layout.module.css";

export default function DashboardPage() {
  return (
    <div>
      <nav>Navbar Here</nav>
      <main>
        <h1 className={styles.test}>Dashboard</h1>
        {/* Static sections can be rendered directly */}
        <section>Static Content Section</section>
        {/* Place any dynamic sections or client components here */}
        <Dashboard />
      </main>
    </div>
  );
}

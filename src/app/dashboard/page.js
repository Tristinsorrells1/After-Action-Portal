import React from "react";
import styles from "./layout.module.scss";
import Dashboard from "../../components/Dasboard.client";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <section className={styles["dashboard-section"]}>
        <Header />
        {/* Static sections can be rendered directly */}
        <section>Static Dashboard Content Section</section>
        {/* Place any dynamic sections or client components here */}
        <Dashboard />
      </section>
    </main>
  );
}

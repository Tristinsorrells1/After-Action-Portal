import React from "react";
import styles from "./layout.module.css";
import Dashboard from "../../components/Dasboard.client";
import Navbar from "../../components/navbar";

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <section className="dashboard-section">
        {/* Static sections can be rendered directly */}
        <section>Static Dashboard Content Section</section>
        {/* Place any dynamic sections or client components here */}
        <Dashboard />
      </section>
    </main>
  );
}

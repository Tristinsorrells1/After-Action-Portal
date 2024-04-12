"use client";

import React, { useEffect, useState } from "react";
import { auth } from "../../app/firebase";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulate fetching user-specific data
    const fetchData = async () => {
      const response = await fetch("/api/user-data", {
        headers: {
          // Include any necessary headers, like authentication tokens
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setUserData(data);
    };

    // fetchData();
  }, []);

  return (
    <div className="dynamic-dashboard-container">
          {userData ? (
            <div>
              {/* Render user-specific data here */}
              <p>Welcome, {userData.name}</p>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
    </div>
  );
}

export default Dashboard;

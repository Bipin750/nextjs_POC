"use client";

import Cards from "@/app/components/Cards/page";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    // Check if user data exists in localStorage
    if (typeof window !== "undefined") {
      let useData = localStorage.getItem("userData");
      if (!useData) {
        redirect("/login");
      } else {
        setUserData(useData);
      }
    }
  }, []);

  return (
    <div>
      {userData && (
        <div>
          <h1>Dashboard</h1>
          <p>Welcome, {userData ? JSON.parse(userData).email : "Guest"}!</p>
          <Cards />
        </div>
      )}
    </div>
  );
};

export default Dashboard;

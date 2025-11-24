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
          <p className="font-bold text-xl m-4">
            Welcome,{" "}
            {userData ? JSON.parse(userData).email.split("@")[0] : "Guest"}!
          </p>
          <Cards />
        </div>
      )}
    </div>
  );
};

export default Dashboard;

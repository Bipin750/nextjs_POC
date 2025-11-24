"use client";

import { redirect } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store data in localStorage as object
    const userData = { email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    redirect("/dashboard");
    // Optional: Clear form
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "500px",
            margin: "50px auto",
            textAlign: "center",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            height: "400px",
          }}
        >
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div style={{ margin: "10px", textAlign: "left" }}>
              <p>Email</p>
              <input
                className="border rounded-md border-[#ccc]"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            {/* Password Field */}
            <div style={{ margin: "10px", textAlign: "left" }}>
              <p>Password</p>

              <input
                className="border rounded-md border-[#ccc]"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            <button
              className="mt-[30%] rounded-md"
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

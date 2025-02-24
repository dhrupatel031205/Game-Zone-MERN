import React, { useEffect, useState } from "react";
import GamingNavbar from "../Elements/Navbar";

export default function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        console.log("Token found:", token); // Debugging step
  
        if (!token) {
          console.log("No token found");
          return;
        }
  
        const response = await fetch("http://localhost:5000/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is prefixed with Bearer
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        console.log("Fetched user data:", data); // Debugging step
  
        if (response.ok) {
          setUser(data);
        } else {
          console.log("Error fetching user data:", data.message);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
  
    fetchUserData();
  }, []);
  
  return (
    <div className="gaming-background">
      <GamingNavbar />
      <div className="container text-center text-white mt-5">
        <h1>Profile</h1>
        {user ? (
          <div className="card bg-dark text-light p-4 mt-3">
            <h3>Username: {user.username}</h3>
            <p>Email: {user.email}</p>
            <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

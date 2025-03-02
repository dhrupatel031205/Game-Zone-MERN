import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GamingNavbar from "../Elements/Navbar";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = "";
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found, please log in.");
        setTimeout(() => navigate("/login"), 2000);
        return;
      }
  
      try {
        const response = await fetch("http://localhost:5000/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        console.log("🔍 API Response Status:", response.status); // Debugging
        const data = await response.json();
        console.log("✅ API Response Data:", data); // Debugging
  
        if (response.ok) {
          setUser(data);
        } else {
          setError(data.message || "Failed to fetch user data");
          localStorage.removeItem("token");
          setTimeout(() => navigate("/login"), 2000);
        }
      } catch (error) {
        console.error("❌ Fetch Error:", error); // Debugging
        setError("Error fetching user data.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [navigate]);
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="gaming-background">
      <GamingNavbar />
      <div className="container text-center text-white mt-5">
        <h1>Profile</h1>
        {loading ? (
          <p>Loading user data...</p>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          user && (
            <div className="card bg-dark text-light p-4 mt-3">
              <h3>Username: {user.username}</h3>
              <p>Email: {user.email}</p>
              <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
              <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

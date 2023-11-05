import React, { useState, useEffect } from "react";
import { getUserInfo } from "./api";

function UserDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getUserInfo(); // Implement getUserInfo function
        setUser(userInfo);
      } catch (error) {
        // Handle error
        console.error("Error fetching user info", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
          {/* Add edit user info form here */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserDashboard;

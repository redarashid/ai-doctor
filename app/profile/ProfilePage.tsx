"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const BASE_URL =
    "https://brenden-edificatory-gisela.ngrok-free.dev";

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dob: "",
  });

  // =========================
  // GET USER DATA
  // =========================
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/profile`, {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();

        setUserData({
          name: data.name || "",
          email: data.email || "",
          dob: data.dob || "",
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  // =========================
  // UPDATE PROFILE
  // =========================
  const handleSave = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      alert(data.message || "Profile updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = async () => {
    try {
      await fetch(`${BASE_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });

      window.location.href = "/login";
    } catch (err) {
      console.log(err);
    }
  };

  // =========================
  // DELETE ACCOUNT
  // =========================
  const handleDeleteAccount = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete your account?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(`${BASE_URL}/api/user`, {
        method: "DELETE",
        credentials: "include",
      });

      alert("Account deleted");

      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #e8f4fd 0%, #f0f7ff 40%, #e8f0fe 100%)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center px-8 py-4"
        style={{
          background: "white",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div className="flex items-center gap-6">
          <button
            className="flex items-center gap-1 text-sm"
            style={{ color: "#6b7280" }}
          >
            <span style={{ fontSize: 16 }}>←</span> Back to Home
          </button>

          <div className="flex items-center gap-3">
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #3b82f6, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <polyline
                  points="2,12 6,12 8,6 10,18 12,10 14,14 16,12 22,12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <p
                className="font-semibold text-sm"
                style={{ color: "#111827" }}
              >
                AI Doctor
              </p>
              <p
                className="text-xs"
                style={{ color: "#9ca3af" }}
              >
                Account Settings
              </p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
          style={{
            border: "1.5px solid #fca5a5",
            color: "#ef4444",
            borderRadius: 8,
            background: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        className="p-8"
        style={{ maxWidth: 900, margin: "0 auto" }}
      >
        {/* Profile Card */}
        <div
          style={{
            background: "white",
            borderRadius: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            padding: "28px 32px",
            marginBottom: 24,
            border: "1px solid #f3f4f6",
          }}
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4 items-center">
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 16,
                  background:
                    "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="8" r="4" fill="white" />
                  <path
                    d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h2
                  className="font-bold"
                  style={{
                    fontSize: 22,
                    color: "#111827",
                    marginBottom: 2,
                  }}
                >
                  {userData.name}
                </h2>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 14,
                    marginBottom: 6,
                  }}
                >
                  {userData.email}
                </p>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
              style={{
                border: "1.5px solid #3b82f6",
                borderRadius: 10,
                background: "#3b82f6",
                color: "white",
                cursor: "pointer",
              }}
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 mb-6"
          style={{
            background: "#f3f4f6",
            padding: 4,
            borderRadius: 12,
            width: "fit-content",
          }}
        >
          {["Profile", "Security", "Notifications"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 9,
                  fontSize: 14,
                  fontWeight:
                    activeTab === tab ? 600 : 400,
                  color:
                    activeTab === tab
                      ? "#111827"
                      : "#6b7280",
                  background:
                    activeTab === tab
                      ? "white"
                      : "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Personal Information */}
        <div
          style={{
            background: "white",
            borderRadius: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            padding: "28px 32px",
            marginBottom: 24,
            border: "1px solid #f3f4f6",
          }}
        >
          <h3
            className="font-semibold"
            style={{
              fontSize: 17,
              color: "#111827",
              marginBottom: 20,
            }}
          >
            Personal Information
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Name */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 6,
                }}
              >
                Full Name
              </label>

              <input
                value={userData.name}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  })
                }
                style={{
                  width: "100%",
                  border: "1.5px solid #e5e7eb",
                  padding: "12px 14px",
                  borderRadius: 10,
                  fontSize: 14,
                  color: "#374151",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 6,
                }}
              >
                Email Address
              </label>

              <input
                value={userData.email}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  })
                }
                style={{
                  width: "100%",
                  border: "1.5px solid #e5e7eb",
                  padding: "12px 14px",
                  borderRadius: 10,
                  fontSize: 14,
                  color: "#374151",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* DOB */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 6,
                }}
              >
                Date of Birth
              </label>

              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    dob: e.target.value,
                  })
                }
                style={{
                  width: "100%",
                  border: "1.5px solid #e5e7eb",
                  padding: "12px 14px",
                  borderRadius: 10,
                  fontSize: 14,
                  color: "#374151",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div
          style={{
            background: "#fff5f5",
            borderRadius: 16,
            border: "1.5px solid #fecaca",
            padding: "28px 32px",
          }}
        >
          <h3
            className="font-semibold"
            style={{
              fontSize: 17,
              color: "#dc2626",
              marginBottom: 8,
            }}
          >
            Danger Zone
          </h3>

          <p
            style={{
              color: "#ef4444",
              fontSize: 13,
              marginBottom: 16,
            }}
          >
            Once you delete your account, there is no going
            back.
          </p>

          <button
            onClick={handleDeleteAccount}
            style={{
              border: "1.5px solid #ef4444",
              color: "#ef4444",
              padding: "9px 20px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 500,
              background: "white",
              cursor: "pointer",
            }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
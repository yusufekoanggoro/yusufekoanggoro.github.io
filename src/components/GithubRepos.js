import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const username = "yusufekoanggoro";
  const exactRepoNames = [
    "grcpc-unary-go",
    "AHPRecruit",
    "WasteBankApp",
    "waste-bank-service",
    "go-solid-principle",
    "ec2-node-deployer",
    "oauth-app",
    "goroutine-examples",
    "library-api-microservices",
    "grafana-dashboard-backend",
  ];

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
      });
  }, []);

  const filteredRepos = repos.filter((repo) =>
    exactRepoNames.includes(repo.name)
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
          listStyle: "none",
          padding: 0,
        }}
      >
        {filteredRepos.map((repo) => (
          <li
            key={repo.id}
            onClick={() => window.open(repo.html_url, "_blank")}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <h3
                style={{
                  fontSize: "clamp(16px, 2vw, 18px)",
                  fontWeight: "bold",
                  color: "#007bff",
                  margin: "0 0 8px",
                  wordBreak: "break-word",
                }}
              >
                {repo.name}
              </h3>

              <p
                style={{
                  fontSize: "clamp(13px, 1.5vw, 14px)",
                  color: "#555",
                  lineHeight: "1.5",
                  marginBottom: "12px",
                  textAlign: "justify",
                  overflowWrap: "break-word",
                }}
              >
                {repo.description || "No description available"}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    background: "#f0f0f0",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {repo.language || "Unknown"}
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: "12px",
                fontSize: "12px",
                color: "#444",
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid #ddd",
                paddingTop: "10px",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <p>📅 Created: {new Date(repo.created_at).toLocaleDateString()}</p>
              <p>🔄 Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

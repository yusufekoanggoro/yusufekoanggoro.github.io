import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const username = "yusufekoanggoro";
  const exactRepoNames = ["grcpc-unary-go", "AHPRecruit", "WasteBankApp", "waste-bank-service"];

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
      });
  }, []);

  const filteredRepos = repos.filter(repo => exactRepoNames.includes(repo.name));

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          listStyle: "none",
          padding: 0,
        }}
      >
        {filteredRepos.map((repo) => (
          <li
            key={repo.id}
            style={{
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              {repo.name}
            </a>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {repo.description || "No description available"}
            </p>
            <span
              style={{
                fontSize: "12px",
                background: "#f0f0f0",
                padding: "4px 8px",
                borderRadius: "4px",
                display: "inline-block",
                marginTop: "8px",
              }}
            >
              {repo.language || "Unknown"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

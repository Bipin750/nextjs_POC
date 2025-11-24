"use client";

import { useEffect, useState } from "react";
import React from "react";

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;

  // Fetch API
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Filter Posts by Search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Posts</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          border: "1px solid #ddd",
          borderRadius: "6px",
        }}
      />

      {/* Card List */}
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {currentPosts.length === 0 ? (
          <p>No results found...</p>
        ) : (
          currentPosts.map((post) => (
            <div
              className="overflow-auto m-2"
              key={post.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
                background: "#fafafa",
                width: "29%",
                height: "280px",
              }}
              // className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-100"
            >
              <h2
                className="font-bold text-lg"
                style={{ marginBottom: "10px" }}
              >
                {post.title}
              </h2>
              <p className="overflow-hidden"> {post.body}</p>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            style={{
              padding: "8px 12px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            ⬅ Prev
          </button>

          <span>
            Page <b>{currentPage}</b> of <b>{totalPages}</b>
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            style={{
              padding: "8px 12px",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;

import React from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SectionFilter() {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const apiKey = "xLJprHBYSd1NMIz05Y3h3ccpXXBwZhs3";
  const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&api-key=${apiKey}`;

  const { data, isLoading, error } = useFetch(apiUrl);
  const news = data ? data.response.docs : [];
  console.log(data);

  const getImageUrl = (multimedia) => {
    for (const media of multimedia) {
      if (media.type === "image") {
        return `https://static01.nyt.com/${media.url}`;
      }
    }
    return "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = search.toLowerCase().trim().replace(/\s+/g, "+");
    await setSearch(inputs);
    await setInput(search);
    setSearch("");
    // console.log(inputs);
  };
  const varient = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" },
    },
    exit: { opacity: 0, x: "-100vw" },
  };

  return (
    <motion.div
      variants={varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {!isLoading && (
        <form className=" search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="what are you looking for?"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            required
          />
          <button>Submit</button>
        </form>
      )}
      <div className="home container">
        {isLoading && <div className="loading">Loading...</div>}
        {error && <p>Error: {error.message}</p>}
        <motion.ul
          variants={varient}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="news-grid"
        >
          {news.map((newsItem) => {
            const imageUrl = newsItem.multimedia
              ? getImageUrl(newsItem.multimedia)
              : "";

            return (
              <li key={newsItem._id}>
                <div>
                  <h2>{newsItem.headline.main}</h2>
                  <button className="read">
                    <a href={newsItem.web_url} target="_blank">
                      Read
                    </a>
                  </button>
                  <img src={imageUrl} alt={newsItem.headline.main} />
                  <button
                    onClick={() => setInput(newsItem.section_name)}
                    className="section"
                  >
                    {newsItem.section_name}
                  </button>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
}

import React from "react";
import useFetch from "../hooks/useFetch";
import{motion} from 'framer-motion'
export default function SectionFilter({section}) {
  const apiKey = "xLJprHBYSd1NMIz05Y3h3ccpXXBwZhs3";
  const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;

  const { data, isLoading, error } = useFetch(apiUrl);
  const news = data ? data.results : [];
  console.log(data);

  const getImageUrl = (multimedia) => {
    if (multimedia && multimedia.length >= 2) {
      return multimedia[1].url;
    }
    return "";
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
      className="home container"
    >
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

          // if (imageUrl) {
          return (
            <li key={newsItem.asset_id}>
              <div>
                <h2>{newsItem.title}</h2>
                <button className="read">
                  <a href={newsItem.url} target="_blank" rel="noreferrer">
                    Read
                  </a>
                </button>
                <img src={imageUrl} alt={newsItem.title} />
                <button className="section">{newsItem.section}</button>
              </div>
            </li>
          );
          // }

          // return null;
        })}
      </motion.ul>
    </motion.div>
  );
}

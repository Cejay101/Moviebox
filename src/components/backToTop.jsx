import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the button should be visible
  const checkVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  // Scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top">
          <FontAwesomeIcon icon={faPaperPlane} className="icon" ></FontAwesomeIcon>

        </button>
      )}
    </>
  );
};

export default BackToTopButton;

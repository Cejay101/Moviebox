import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHashnode } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer>
      <ul>
        <a
          href="https://twitter.com/ClintonJoy10"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/clinton-joy-538804244/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          href="https://github.com/Cejay101/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://cejay.hashnode.dev/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="2x" icon={faHashnode} />
        </a>
      </ul>
      <div className="copyrights">
        ©2023 Clinton Joy. All rights reserved. API @nytimes
      </div>
    </footer>
  );
}

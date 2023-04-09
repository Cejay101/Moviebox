import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <footer>
        <ul>
          <Link>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          <Link>
            <FontAwesomeIcon size="2x" icon={faHashnode} />
          </Link>
        </ul>
      <div className="copyrights">
        ©2023 Clinton Joy. All rights reserved. API @nytimes
      </div>
    </footer>
  );
}

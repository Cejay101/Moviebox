import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion'
export default function Footer() {
const footerVariant={
  hidden: {y:'0vh'},
  visible:{y:0, transition:{delay:10000}}
}

  return (
    <motion.footer variants={footerVariant} initial="hidden" animate="visible">
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
    </motion.footer>
  );
}

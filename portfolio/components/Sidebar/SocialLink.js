import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLink = ({ social }) => {

    const { facebook, instagram, twitter, linkedin, github } = social;

    return (
        <div className="flex justify-evenly">
            {facebook ? <a href={facebook} target="_blank"><FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faFacebookF} /></a> : null}
            {instagram ?<a href={instagram} target="_blank"><FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faInstagram} /></a> : null}
            {twitter ?<a href={twitter} target="_blank"> <FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faTwitter} /> </a>: null}
            {linkedin ? <a href={linkedin} target="_blank"><FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faLinkedin} /> </a>: null}
            {github ? <a href={github} target="_blank"><FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faGithub} /> </a>: null}
        </div>
    )
}

export default SocialLink

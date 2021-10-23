import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const SocialLink = ()=> {
    return (
        <div className="flex justify-evenly">
            <FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faFacebookF} />
            <FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faInstagram} />
            <FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faTwitter} />
            <FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faLinkedin} />
            <FontAwesomeIcon className="w-6 h-6 hover:text-green-300 hover:animate-bounce" icon={faGithub} />
        </div>
    )
}

export default SocialLink

import { faTwitter, faFacebookF, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer>
            <button><FontAwesomeIcon icon={faTwitter} /></button>
            <button><FontAwesomeIcon icon={faFacebookF} /></button>
            <button><FontAwesomeIcon icon={faInstagram} /></button>
            <button><FontAwesomeIcon icon={faGithub} /></button>
        </footer>
    );
}